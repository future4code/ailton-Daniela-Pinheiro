import { IPersonDB, Person } from "../models/Person"
import { BaseDatabase } from "./BaseDatabase"

export class PersonDatabase extends BaseDatabase {
    protected static TABLE_NAME = "Cubo_Participation"

    public createPerson = async(person: Person): Promise<void> => {
        await BaseDatabase.connection(PersonDatabase.TABLE_NAME)
            .insert({
                id: person.getId(),
                name: person.getName(),
                surname: person.getSurname(),
                participation: person.getParticipation()
            })
    }

    public getAllPersons = async(): Promise<IPersonDB[]> => {
        const result = await BaseDatabase.connection(PersonDatabase.TABLE_NAME)
            .select('*')

        return result
    }
}