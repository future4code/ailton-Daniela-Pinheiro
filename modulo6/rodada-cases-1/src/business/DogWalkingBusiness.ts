import { DogWalkingDatabase } from "../database/DogWalkingDatabase"
import { ConflictError } from "../errors/ConflictError"
import { NotFoundError } from "../errors/NotFoundError"
import { ParamsError } from "../errors/ParamsError"
import {
    DogWalking,
    IChangeStatusInput,
    IDogWalkingInput,
    IPetWalkRelationInput,
    STATUS
} from "../model/DogWalking"
import { Pet } from "../model/Pet"
import { IdGenerator } from "../services/IdGenerator"

export class DogWalkingBusiness {
    constructor(
        public dogWalkingDatabase: DogWalkingDatabase,
        public idGenerator: IdGenerator
    ) {}

    public index = async(filter?: string): Promise<DogWalking[]> => {
        const result = await this.dogWalkingDatabase.getAllWalks(filter)

        const walks: DogWalking[] = []

        for(let walk of result) {
            const petsDB = await this.dogWalkingDatabase.getPetsForWalk(walk.id)

            const pets = petsDB.map(pet => {
                return new Pet(
                    pet.id,
                    pet.name,
                    pet.breed,
                    pet.age
                )
            })


            const dogWalking = new DogWalking(
                walk.id,
                walk.status,
                walk.date.toLocaleDateString(),
                walk.price,
                walk.duration,
                walk.latitude,
                walk.longitude,
                pets,
                walk.start_time,
                walk.finish_time
            )

            walks.push(dogWalking)
        }

        return walks
    }

    public show = async(id: string): Promise<DogWalking> => {
        const result = await this.dogWalkingDatabase.getWalkById(id)

        if(!result) {
            throw new NotFoundError("Passeio não encontrado")
        }

        const petsDB = await this.dogWalkingDatabase.getPetsForWalk(result.id)
        const pets = petsDB.map(pet => {
            return new Pet(
                pet.id,
                pet.name,
                pet.breed,
                pet.age
            )
        })

        const walk = new DogWalking(
            result.id,
            result.status,
            result.date.toLocaleDateString(),
            result.price,
            result.duration,
            result.latitude,
            result.longitude,
            pets,
            result.start_time,
            result.finish_time
        )

        return walk
    }

    public calculatePrice = (duration: number, pets: string[]): number => {
        switch(duration) {
            case 30:
                if(pets.length > 1) {
                    const firstPet: number = 1
                    const additionalPet: number = pets.length - firstPet

                    const price: number = firstPet*25 + additionalPet*15

                    return price
                } else {
                    const price: number = 25

                    return price
                }
            case 60:
                if(pets.length > 1) {
                    const firstPet: number = 1
                    const additionalPet: number = pets.length - firstPet

                    const price: number = firstPet*35 + additionalPet*20

                    return price
                } else {
                    const price: number = 35

                    return price
                }
            default:
                return 0
        }
    }

    public createWalk = async(input: IDogWalkingInput): Promise<string> => {
        const {
            date,
            latitude,
            longitude,
            startTime,
            finishTime,
            pets
        } = input

        if(!date || !latitude || !longitude || !startTime || !finishTime || !pets.length) {
            throw new ParamsError("Todas as informações são obrigatórias")
        }

        if(isNaN(latitude)) {
            throw new ParamsError("Parâmetro 'latitude' inválido: deve ser um número")
        }
        
        if(isNaN(longitude)) {
            throw new ParamsError("Parâmetro 'longitude' inválido: deve ser um número")
        }

        if(!date.match(/(0\d{1}|1[0-2])\/([0-2]\d{1}|3[0-1])\/(19|20)\d{2}/)) {
            throw new ParamsError("Parâmetro 'date' inválido: deve estar no formato mm/dd/aaaa")   
        }

        if(!startTime.match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)) {
            throw new ParamsError("Parâmetro 'startTime' inválido: deve estar no formato hh:mm")
        }
        
        if(!finishTime.match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)) {
            throw new ParamsError("Parâmetro 'finishTime' inválido: deve estar no formato hh:mm")
        }

        const duration = await this.dogWalkingDatabase.getDuration(startTime, finishTime)
        if(!duration) {
            throw new ParamsError("Duração do passeio inválida: dever ser ou 30 minutos ou 1 hora")
        }

        const choosenPets: Pet[] = []
        for(let petId of pets) {
            const petDB = await this.dogWalkingDatabase.getPetById(petId)

            if(!petDB) {
                throw new NotFoundError("Pet não encontrado")
            }

            const pet = new Pet(
                petDB.id,
                petDB.name,
                petDB.breed,
                petDB.age
            )

            choosenPets.push(pet)
        }

        const price = this.calculatePrice(duration, pets)
        const walkDate = new Date(date)
        const walkId = this.idGenerator.generate()

        const dogWalking = new DogWalking(
            walkId,
            STATUS.NOT_STARTED,
            walkDate,
            price,
            duration,
            latitude,
            longitude,
            choosenPets,
            startTime,
            finishTime
        )

        await this.dogWalkingDatabase.createWalk(dogWalking)

        for(let petId of pets) {
            const id = this.idGenerator.generate()

            const relation: IPetWalkRelationInput = {
                id,
                petId,
                walkId
            }

            await this.dogWalkingDatabase.createPetWalkRelation(relation)
        }

        const message: string = "Passeio agendado com sucesso"
        return message
    }

    public startWalk = async(id: string): Promise<string> => {
        const walkExists = await this.dogWalkingDatabase.getWalkById(id)

        if(!walkExists) {
            throw new NotFoundError("Passeio não encontrado")
        }

        if(walkExists.status === STATUS.STARTED) {
            throw new ConflictError("Este passeio ja foi iniciado")
        }

        if(walkExists.status === STATUS.FINISHED) {
            throw new ConflictError("Este passeio já foi encerrado")
        }

        const input: IChangeStatusInput = {
            status: STATUS.STARTED,
            id: id
        }

        await this.dogWalkingDatabase.changeStatus(input)

        const message: string = "Passeio iniciado"
        return message
    }

    public finishWalk = async(id: string): Promise<string> => {
        const walkExists = await this.dogWalkingDatabase.getWalkById(id)

        if(!walkExists) {
            throw new NotFoundError("Passeio não encontrado")
        }

        if(walkExists.status === STATUS.NOT_STARTED) {
            throw new ConflictError("Só é possível encerrar um passeio que já foi iniciado")
        }

        if(walkExists.status === STATUS.FINISHED) {
            throw new ConflictError("Este passeio já foi encerrado")
        }

        const input: IChangeStatusInput = {
            status: STATUS.FINISHED,
            id: id
        }

        await this.dogWalkingDatabase.changeStatus(input)

        const message: string = "Passeio encerrado"
        return message
    }
}