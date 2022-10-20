import { PersonDatabase } from "../data/PersonDatabase"
import { ParametersError } from "../error/ParametersError"
import { IPersonInput, Person } from "../models/Person"
import { IdGenerator } from "../services/IdGenerator"

export class PersonBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private personDatabase: PersonDatabase
    ) {}

    public createPerson = async(input: IPersonInput): Promise<string> => {
        const { name, surname, participation } = input

        if(!name || !surname || !participation) {
            throw new ParametersError("Missing parameters 'name', 'surname' or 'participation'")
        }

        if(typeof name != "string") {
            throw new ParametersError("Invalid 'name', must be a string")
        }

        if(typeof surname != "string") {
            throw new ParametersError("Invalid 'surname', must be a string")
        }

        if(isNaN(participation)) {
            throw new ParametersError("Invalid 'participation', must be a number")
        }

        if(participation < 0) {
            throw new ParametersError("Invalid 'participation', must be a positive number")
        }

        const id = this.idGenerator.generateId()

        const person = new Person(
            id,
            name,
            surname,
            participation
        )

        await this.personDatabase.createPerson(person)

        const message: string = "Person signed up successfully"
        return message
    }

    public getAllPersons = async(): Promise<Person[]> => {
        const result = await this.personDatabase.getAllPersons()
        
        const persons: Person[] = result.map(person => {
            return new Person(
                person.id,
                person.name,
                person.surname,
                person.participation
            )
        })

        return persons
    }
}