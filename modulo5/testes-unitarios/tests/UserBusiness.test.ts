import {describe, expect, test} from '@jest/globals'
import { UserBusiness } from "../src/business/UserBusiness"
import { UserDatabaseMock } from "./mocks/UserDatabaseMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { HashManagerMock } from "./mocks/HashManagerMock"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { ILoginInputDTO, ISignupInputDTO } from '../src/models/User'

describe("Testando a UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("Testando o signup: retorna um token quando o cadastro é bem sucedido.", async() => {
        const input: ISignupInputDTO = {
            name: "Fulano",
            email: "fulano@mail.com",
            password: "bananinha"
        }

        const response = await userBusiness.signup(input)

        expect(response.token).toBe("token-mock-normal")
    })

    test("Testando o login: retorna um token quando o login é bem sucedido.", async() => {
        const input: ILoginInputDTO = {
            email: "astrodev@gmail.com",
            password: "bananinha"
        }

        const response = await userBusiness.login(input)

        expect(response.token).toBe("token-mock-admin")
    })
})