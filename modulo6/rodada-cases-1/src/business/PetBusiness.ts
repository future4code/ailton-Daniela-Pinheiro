import { PetDatabase } from "../database/PetDatabase"
import { Pet } from "../model/Pet"
import { IdGenerator } from "../services/IdGenerator"

export class PetBusiness {
    constructor(
        public petDatabase: PetDatabase,
        public idGenerator: IdGenerator
    ) {}

    public getPets = async(): Promise<Pet[]> => {
        const result = await this.petDatabase.getPets()

        const pets = result.map(pet => {
            return new Pet(
                pet.id,
                pet.name,
                pet.breed,
                pet.age
            )
        })

        return pets
    }

}