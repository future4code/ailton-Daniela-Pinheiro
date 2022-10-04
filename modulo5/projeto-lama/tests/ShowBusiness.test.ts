import { describe, expect, test } from "@jest/globals"
import { ShowBusiness } from "../src/business/ShowBusiness"
import { ShowDatabaseMock } from "./mocks/ShowDatabaseMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { ICreateShowInput, IManageTicketInput, Show } from "../src/models/Show"
import { BaseError } from "../src/errors/BaseError"

describe("Testando a ShowBusiness", () => {
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("Testando o createShow: deve retornar uma mensagem de sucesso", async() => {
        const input: ICreateShowInput = {
            token: "token-mock-admin",
            band: "Band 2",
            startsAt: "12/06/2022"
        }

        const message = await showBusiness.createShow(input)

        expect(message).toBe("Show cadastrado com sucesso!")
    })

    test("Testando o createShow: deve retornar um erro de data indisponível", async() => {
        expect.assertions(2)
        
        try {
            const input: ICreateShowInput = {
                token: "token-mock-admin",
                band: "Band 2",
                startsAt: "12/05/2022"
            }

            const message = await showBusiness.createShow(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(409)  
                expect(error.message).toBe("Já existe um show marcado nesta data")
            }
        }
    })

    test("Testando o createShow: deve retornar um erro de permissão insuficiente", async() => {
        expect.assertions(2)
        
        try {
            const input: ICreateShowInput = {
                token: "token-mock-normal",
                band: "Band 2",
                startsAt: "12/06/2022"
            }

            const message = await showBusiness.createShow(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(403)  
                expect(error.message).toBe("Permissão insuficiente")
            }
        }
    })

    test("Testando o createShow: deve retornar um erro de formato de data inválido", async() => {
        expect.assertions(2)
        
        try {
            const input: ICreateShowInput = {
                token: "token-mock-admin",
                band: "Band 2",
                startsAt: "1/6/2022"
            }

            const message = await showBusiness.createShow(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)  
                expect(error.message).toBe("Parâmetro 'startsAt' inválido: deve estar no formato mm/dd/aaaa")
            }
        }
    })

    test("Testando o createShow: deve retornar um erro de data inválida", async() => {
        expect.assertions(2)
        
        try {
            const input: ICreateShowInput = {
                token: "token-mock-admin",
                band: "Band 2",
                startsAt: "12/02/2022"
            }

            const message = await showBusiness.createShow(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)  
                expect(error.message).toBe("Parâmetro 'startsAt' inválido: a data do show não pode ser anterior a 5 de dezembro")
            }
        }
    })

    test("Testando o getShows: deve retornar uma lista de shows", async() => {
        const shows = await showBusiness.getShows()

        expect(shows.length).toBe(2)
        expect(shows[0]).toBeInstanceOf(Show)
        expect(shows[0].getId()).toBe("001")
        expect(shows[0].getBand()).toBe("Mock Band")
        expect(shows[0].getTickets()).toBe(0)
    })

    test("Testando o bookTicket: deve retornar uma mensagem de sucesso", async() => {
        const input: IManageTicketInput = {
            token: "token-mock-normal",
            showId: "002"
        }

        const message = await showBusiness.bookTicket(input)

        expect(message).toBe("Ingresso reservado com sucesso!")
    })

    test("Testando o bookTicket: deve retornar um erro de ingressos esgotados", async() => {
        try {
            const input: IManageTicketInput = {
                token: "token-mock-normal",
                showId: "001"
            }
    
            const message = await showBusiness.bookTicket(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(409)  
                expect(error.message).toBe("Os ingressos para este show já estão esgotados")
            }
        }
    })
})