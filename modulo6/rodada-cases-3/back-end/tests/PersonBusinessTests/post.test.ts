import { describe, test, expect } from '@jest/globals'
import { PersonBusiness } from '../../src/business/PersonBusiness'
import { BaseError } from '../../src/error/BaseError'
import { IPersonInput } from '../../src/models/Person'
import { IdGeneratorMock } from '../mocks/IdGeneratorMock'
import { PersonDatabaseMock } from '../mocks/PersonDatabaseMock'

describe("Testing PersonBusiness' createPerson method", () => {
    const personBusiness = new PersonBusiness(
        new IdGeneratorMock,
        new PersonDatabaseMock
    )

    test("Expected to return a success message", async() => {
        const input: IPersonInput = {
            name: "Mock-name",
            surname: "Mock-surname",
            participation: 1
        }

        const message = await personBusiness.createPerson(input)

        expect(message).toBe("Person signed up successfully")
    })

    test("Invalid 'name': expected to return an error message", async() => {
        expect.assertions(2)

        try {
            const input: IPersonInput = {
                name: "",
                surname: "Mock-surname",
                participation: 1
            }

            const message = await personBusiness.createPerson(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Invalid 'name', must be a string")
            }  
        }
    })

    test("Invalid 'surname': expected to return an error message", async() => {
        expect.assertions(2)

        try {
            const input: IPersonInput = {
                name: "Mock-name",
                surname: "",
                participation: 1
            }

            const message = await personBusiness.createPerson(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Invalid 'surname', must be a string")
            }  
        }
    })

    test("Invalid 'participation': expected to return an error message", async() => {
        expect.assertions(2)

        try {
            const input: IPersonInput = {
                name: "Mock-name",
                surname: "Mock-surname",
                participation: -1
            }

            const message = await personBusiness.createPerson(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Invalid 'participation', must be a positive number")
            }  
        }
    })
})