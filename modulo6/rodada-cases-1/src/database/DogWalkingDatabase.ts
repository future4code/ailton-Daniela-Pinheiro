import {
    DogWalking,
    IChangeStatusInput,
    IDogWalkingDB,
    IPetWalkRelationInput
} from "../model/DogWalking"
import { IPetDB } from "../model/Pet"
import { BaseDatabase } from "./BaseDatabase"

export class DogWalkingDatabase extends BaseDatabase {
    public static TABLE_DOG_WALKING = 'Dog_Walking'
    public static TABLE_PETS = 'Pets'
    public static TABLE_WALKS = 'Walks'
    
    public getAllWalks = async(filter?: string): Promise<IDogWalkingDB[]> => {
        if(filter && filter === "date") {
            const today: string = new Date().toJSON().slice(0, 10)

            const result = await BaseDatabase.connection(DogWalkingDatabase.TABLE_DOG_WALKING)
                .select('*')
                .where('date', '>=', today)
                .orderBy('date')
            
            return result
        } else {
            const result = await BaseDatabase.connection(DogWalkingDatabase.TABLE_DOG_WALKING)
            .select('*')
            .orderBy('date')
            
            return result
        }
    }
    
    public getPetsForWalk = async(walkId: string): Promise<IPetDB[]> => {
        const result = await BaseDatabase.connection(`${DogWalkingDatabase.TABLE_PETS} as p`)
        .join(`${DogWalkingDatabase.TABLE_WALKS} as w`, 'w.pet_id', 'p.id')
        .select('p.id', 'p.name', 'p.breed', 'p.age')
        .where({ 'w.walk_id': `${walkId}` })
        
        return result
    }
    
    public getWalkById = async(id: string): Promise<IDogWalkingDB | undefined> => {
        const result = await BaseDatabase.connection(DogWalkingDatabase.TABLE_DOG_WALKING)
            .select('*')
            .where({ id })

        if(!result.length) {
            return undefined
        } else {
            return result[0]
        }
    }

    public getPetById = async(id: string): Promise<IPetDB | undefined> => {
        const result = await BaseDatabase.connection(DogWalkingDatabase.TABLE_PETS)
        .select('*')
        .where({ id })
        
        if(!result.length) {
            return undefined
        } else {
            return result[0]
        }
    }
    
    public getDuration = async(startTime: string, finishTime: string): Promise<number | undefined> => {
        const result = await BaseDatabase.connection.raw(
            `SELECT TIMEDIFF('${startTime}', '${finishTime}') AS duration`
        )
            
        switch(result[0][0].duration) {
            case "-00:30:00":
                return 30
            case "-01:00:00":
                return 60
            default:
                return undefined
        }
    }

    public createWalk = async(input: DogWalking) => {
        await BaseDatabase.connection(DogWalkingDatabase.TABLE_DOG_WALKING)
            .insert({
                id: input.getId(),
                status: input.getStatus(),
                date: input.getDate(),
                price: input.getPrice(),
                duration: input.getDuration(),
                latitude: input.getLatitude(),
                longitude: input.getLongitude(),
                start_time: input.getStartTime(),
                finish_time: input.getFinishTime()
            })
    }

    public createPetWalkRelation = async(input: IPetWalkRelationInput) => {
        await BaseDatabase.connection(DogWalkingDatabase.TABLE_WALKS)
            .insert({
                id: input.id,
                pet_id: input.petId,
                walk_id: input.walkId
            })
    }

    public changeStatus = async(input: IChangeStatusInput) => {
        const { status, id } = input

        await BaseDatabase.connection(DogWalkingDatabase.TABLE_DOG_WALKING)
            .update({ status })
            .where({ id })
    }
}