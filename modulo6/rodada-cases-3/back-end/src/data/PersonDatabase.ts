import { BaseDatabase } from "./BaseDatabase"

export class PersonDatabase extends BaseDatabase {
    protected static TABLE_NAME = "Cubo_Participation"

    public createPerson = async(): Promise<void> => {}

    public getAllPersons = async(): Promise<any[]> => {
        return []
    }
}