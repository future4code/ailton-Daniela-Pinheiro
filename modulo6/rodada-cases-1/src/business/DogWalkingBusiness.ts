import { DogWalkingDatabase } from "../database/DogWalkingDatabase"
import { NotFoundError } from "../errors/NotFoundError"
import { ParamsError } from "../errors/ParamsError"
import { DogWalking, IDogWalkingInput, IPetWalkRelationInput, STATUS } from "../model/DogWalking"
import { Pet } from "../model/Pet"
import { IdGenerator } from "../services/IdGenerator"

export class DogWalkingBusiness {
    constructor(
        public dogWalkingDatabase: DogWalkingDatabase,
        public idGenerator: IdGenerator
    ) {}

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

        // verifica o formato de data mm/dd/aaaa
        // verifica o formato das horas hh:mm

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
}