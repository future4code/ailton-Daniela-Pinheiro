import { IPetDB } from "../../src/model/Pet"
import { BaseDatabase } from "../../src/database/BaseDatabase"

export class PetDatabaseMock extends BaseDatabase {
    public static TABLE_PETS = "Pets"

    public getPets = async(): Promise<IPetDB[]> => {
        const result: IPetDB[] = [
            {
                id: "01",
                name: "Dog Mock 1",
                breed: "Breed Mock",
                age: 1
            },
            {
                id: "02",
                name: "Dog Mock 2",
                breed: "Breed Mock",
                age: 2
            },
            {
                id: "03",
                name: "Dog Mock 3",
                breed: "Breed Mock",
                age: 1
            }
        ]

        return result
    }
}