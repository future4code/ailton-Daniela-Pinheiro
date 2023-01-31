import { IPersonDB, Person } from "../../src/models/Person"
import { BaseDatabase } from "../../src/data/BaseDatabase"

export class PersonDatabaseMock extends BaseDatabase {
    protected static TABLE_NAME = "Cubo_Participation"

    public createPerson = async(person: Person): Promise<void> => {}

    public getAllPersons = async(): Promise<IPersonDB[]> => {
        const result: IPersonDB[] = [
            {
                id: "1",
                name: "Name-1",
                surname: "Surname-1",
                participation: 1
            },
            {
                id: "2",
                name: "Name-2",
                surname: "Surname-2",
                participation: 2
            },
            {
                id: "3",
                name: "Name-3",
                surname: "Surname-3",
                participation: 3
            }
        ]

        return result
    }
}