import { describe, test, expect } from '@jest/globals'
import { PersonBusiness } from '../../src/business/PersonBusiness'
import { Person } from '../../src/models/Person'
import { IdGeneratorMock } from '../mocks/IdGeneratorMock'
import { PersonDatabaseMock } from '../mocks/PersonDatabaseMock'

describe("Testing PersonBusiness' getAllPersons method", () => {
    const personBusiness = new PersonBusiness(
        new IdGeneratorMock,
        new PersonDatabaseMock
    )

    test("Expected to return an array of all persons in the database", async() => {
        const result = await personBusiness.getAllPersons()

        expect(result.length).toBe(3)
        expect(result[0]).toBeInstanceOf(Person)
        expect(result[0].getId()).toBe("1")
        expect(result[0].getName()).toBe("Name-1")
        expect(result[0].getSurname()).toBe("Surname-1")
        expect(result[0].getParticipation()).toBe(1)
    })
})