import { describe, expect, test } from "@jest/globals"
import { UserBusiness } from "../src/business/UserBusiness"
import { UserDatabaseMock } from "./mocks/UserDatabaseMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { HashManagerMock } from "./mocks/HashManagerMock"
import { ILoginInput, ISignUpInput } from "../src/models/User"

describe("Testando casos de sucesso da UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("Testando o signup: deve retornar uma mensagem de sucesso e um token", async() => {
        const input: ISignUpInput = {
            name: "Fulano",
            email: "fulano@gmail.com",
            password: "password-mock"
        }

        const response = await userBusiness.signUp(input)

        expect(response.message).toBe("Usuário cadastrado com sucesso")
        expect(response.token).toBe("token-mock-normal")
    })

    test("Testando o login: deve retornar uma mensagem de sucesso e um token", async() => {
        const input: ILoginInput = {
            email: "astrodev@gmail.com",
            password: "bananinha"
        }

        const response = await userBusiness.login(input)

        expect(response.message).toBe("Usuário logado com sucesso")
        expect(response.token).toBe("token-mock-admin")
    })
})