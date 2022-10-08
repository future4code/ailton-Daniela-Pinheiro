import { describe, test, expect } from "@jest/globals"
import { DogWalkingBusiness } from "../src/business/DogWalkingBusiness"
import { BaseError } from "../src/errors/BaseError"
import { DogWalking, IDogWalkingInput, STATUS } from "../src/model/DogWalking"
import { DogWalkingDatabaseMock } from "./mocks/DogWalkingDatabaseMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"

describe("Testando a DogWalkingBusiness", () => {
    const dogWalkingBusiness = new DogWalkingBusiness(
        new DogWalkingDatabaseMock,
        new IdGeneratorMock
    )

    test("Testando o método index: deve retornar um array com todos os passeios", async() => {
        const result = await dogWalkingBusiness.index()

        expect(result[0]).toBeInstanceOf(DogWalking)
        expect(result.length).toBe(3)
        expect(result[0].getId()).toBe("01")
        expect(result[0].getStatus()).toBe(STATUS.FINISHED)
        expect(result[0].getDate()).toBe("04/10/2022")
        expect(result[0].getPrice()).toBe(25)
        expect(result[0].getDuration()).toBe(30)
        expect(result[0].getLatitude()).toBe(20)
        expect(result[0].getLongitude()).toBe(-100)
        expect(result[0].getStartTime()).toBe("12:30")
        expect(result[0].getFinishTime()).toBe("13:00")
        expect(result[0].getPets()[0].getId()).toBe("02")
    })

    test("Testando o método index com filtragem: deve retornar um array com os passeios após a data de hoje", async() => {
        const filter = "date"
        const result = await dogWalkingBusiness.index(filter)

        expect(result[0]).toBeInstanceOf(DogWalking)
        expect(result.length).toBe(2)
        expect(result[0].getId()).toBe("02")
        expect(result[0].getStatus()).toBe(STATUS.STARTED)
        expect(result[0].getDate()).toBe("20/10/2022")
        expect(result[0].getPrice()).toBe(35)
        expect(result[0].getDuration()).toBe(60)
        expect(result[0].getLatitude()).toBe(84)
        expect(result[0].getLongitude()).toBe(40)
        expect(result[0].getStartTime()).toBe("17:30")
        expect(result[0].getFinishTime()).toBe("18:30")
        expect(result[0].getPets()[0].getId()).toBe("01")
    })

    test("Testando o método show: deve retornar as informações de um passeio", async() => {
        const id = "01"
        const result = await dogWalkingBusiness.show(id)

        expect(result).toBeInstanceOf(DogWalking)
        expect(result.getId()).toBe("01")
        expect(result.getStatus()).toBe(STATUS.FINISHED)
        expect(result.getDate()).toBe("04/10/2022")
        expect(result.getPrice()).toBe(25)
        expect(result.getDuration()).toBe(30)
        expect(result.getLatitude()).toBe(20)
        expect(result.getLongitude()).toBe(-100)
        expect(result.getStartTime()).toBe("12:30")
        expect(result.getFinishTime()).toBe("13:00")
        expect(result.getPets()[0].getId()).toBe("02")
    })

    test("Testando o método show: deve retornar uma mensagem de erro de passeio não encontrado", async() => {
        expect.assertions(2)

        try {
            const id = "04"
            const result = await dogWalkingBusiness.show(id)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.message).toBe("Passeio não encontrado")
                expect(error.statusCode).toBe(404)
            }
        }
    })

    test("Testando o método createWalk: deve retornar uma mensagem de sucesso", async() => {
        const input: IDogWalkingInput = {
            date: "11/01/2022",
            latitude: 33,
            longitude: 102,
            startTime: "12:00",
            finishTime: "13:00",
            pets: [
                "01",
                "02"
            ]
        }
        const message = await dogWalkingBusiness.createWalk(input)

        expect(message).toBe("Passeio agendado com sucesso")
    })

    test("Testando o método startWalk: deve retornar uma mensagem de sucesso", async() => {
        const id = "03"
        const message = await dogWalkingBusiness.startWalk(id)

        expect(message).toBe("Passeio iniciado")
    })

    test("Testando o método startWalk: deve retornar uma mensagem de erro de passeio já encerrado", async() => {
        expect.assertions(2)

        try {
            const id = "01"
            const message = await dogWalkingBusiness.startWalk(id)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.message).toBe("Este passeio já foi encerrado")
                expect(error.statusCode).toBe(409)
            }
        }
    })

    test("Testando o método startWalk: deve retornar uma mensagem de erro de passeio já iniciado", async() => {
        expect.assertions(2)

        try {
            const id = "02"
            const message = await dogWalkingBusiness.startWalk(id)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.message).toBe("Este passeio ja foi iniciado")
                expect(error.statusCode).toBe(409)
            }
        }
    })

    test("Testando o método finishWalk: deve retornar uma mensagem de sucesso", async() => {
        const id = "02"
        const message = await dogWalkingBusiness.finishWalk(id)

        expect(message).toBe("Passeio encerrado")
    })

    test("Testando o método finishWalk: deve retornar uma mensagem de erro de passeio já encerrado", async() => {
        expect.assertions(2)

        try {
            const id = "01"
            const message = await dogWalkingBusiness.finishWalk(id)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.message).toBe("Este passeio já foi encerrado")
                expect(error.statusCode).toBe(409)
            }
        }
    })

    test("Testando o método finishWalk: deve retornar uma mensagem de erro de passeio não iniciado", async() => {
        expect.assertions(2)

        try {
            const id = "03"
            const message = await dogWalkingBusiness.finishWalk(id)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.message).toBe("Só é possível encerrar um passeio que já foi iniciado")
                expect(error.statusCode).toBe(409)
            }
        }
    })
})