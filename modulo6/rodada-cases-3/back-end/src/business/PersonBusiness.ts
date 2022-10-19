import { PersonDatabase } from "../data/PersonDatabase"
import { IdGenerator } from "../services/IdGenerator"

export class PersonBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private personDatabase: PersonDatabase
    ) {}

    public createPerson = async(): Promise<string> => {

        await this.personDatabase.createPerson()

        return ""
    }

    public getAllPersons = async(): Promise<any[]> => {

        await this.personDatabase.getAllPersons
        
        return []
    }
}