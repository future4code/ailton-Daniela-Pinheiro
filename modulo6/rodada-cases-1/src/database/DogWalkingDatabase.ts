import { BaseDatabase } from "./BaseDatabase"

export class DogWalkingDatabase extends BaseDatabase {
    public static TABLE_DOG_WALKING = 'Dog_Walking'
    public static TABLE_PETS = 'Pets'
    public static TABLE_WALKS = 'Walks'

    public getAllWalks = async() => {
        const result = await BaseDatabase.connection(DogWalkingDatabase.TABLE_DOG_WALKING)
            .select('*')
    }

    public getPetsForWalk = async(walkId: string) => {
        const result = await BaseDatabase.connection(DogWalkingDatabase.TABLE_PETS as 'p')
            .select('*')
            .rightJoin(DogWalkingDatabase.TABLE_WALKS as 'w', { 'w.pet_id': 'p.id' })
            .where({ 'w.walk_id': walkId })
    }

}