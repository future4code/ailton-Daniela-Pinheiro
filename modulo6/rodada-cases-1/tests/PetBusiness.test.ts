import { describe, test, expect } from "@jest/globals"
import { PetBusiness } from "../src/business/PetBusiness"
import { Pet } from "../src/model/Pet"
import { PetDatabaseMock } from "./mocks/PetDatabaseMock"

describe("Testando a PetBusiness", () => {
    const petBusiness = new PetBusiness(
        new PetDatabaseMock
    )

    test("Testando o método getPets: deve retornar uma lista com todos os pets", async() => {
        const result = await petBusiness.getPets()

        expect(result.length).toBe(3)
        expect(result[0]).toBeInstanceOf(Pet)
        expect(result[0].getId()).toBe("01")
        expect(result[0].getName()).toBe("Dog Mock 1")
        expect(result[0].getBreed()).toBe("Breed Mock")
        expect(result[0].getAge()).toBe(1)
    })
})