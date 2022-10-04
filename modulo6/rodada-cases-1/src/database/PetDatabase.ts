import { IPetDB } from "../model/Pet"
import { BaseDatabase } from "./BaseDatabase"

export class PetDatabase extends BaseDatabase {
    public static TABLE_PETS = "Pets"

    public getPets = async(): Promise<IPetDB[]> => {
        const result: IPetDB[] = await BaseDatabase.connection(PetDatabase.TABLE_PETS)
            .select('*')
            .orderBy('name', 'asc')

        return result
    }
}