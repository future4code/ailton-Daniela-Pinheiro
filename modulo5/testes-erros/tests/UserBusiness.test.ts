import { describe, expect, test } from "@jest/globals"
import { UserBusiness } from "../src/business/UserBusiness"
import { BaseError } from "../src/errors/BaseError"
import { ILoginInputDTO, ISignupInputDTO } from "../src/models/User"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { HashManagerMock } from "./mocks/HashManagerMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { UserDatabaseMock } from "./mocks/UserDatabaseMock"

// describe("Testando a UserBusiness", () => {
//     const userBusiness = new UserBusiness(
//         new UserDatabaseMock(),
//         new IdGeneratorMock(),
//         new HashManagerMock(),
//         new AuthenticatorMock()
//     )
    
//     test("Um token é retornado quando o cadastro é bem-sucedido", async () => {
//         const input: ISignupInputDTO = {
//             email: "fulano@gmail.com",
//             name: "Fulano",
//             password: "fulano123"
//         }

//         const response = await userBusiness.signup(input)
//         expect(response.message).toBe("Cadastro realizado com sucesso")
//         expect(response.token).toBe("token-mock-normal")
//     })

//     test("Um token é retornado quando o login é bem-sucedido", async () => {
//         const input: ILoginInputDTO = {
//             email: "astrodev@gmail.com",
//             password: "bananinha"
//         }

//         const response = await userBusiness.login(input)
//         expect(response.message).toBe("Login realizado com sucesso")
//         expect(response.token).toBe("token-mock-admin")
//     })
// })

describe("Testando os erros da UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("Testando erro do método signup: 'name' tem menos de 3 caracteres.", async () => {
        expect.assertions(2)

        try {
            const input: ISignupInputDTO = {
                name: "F",
                email: "fulano@gmail.com",
                password: "fulano123"
            }
            
            const response = await userBusiness.signup(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'name' inválido: mínimo de 3 caracteres")
            }
        }
    })

    test("Testando erro do método signup: 'email' já cadastrado.", async() => {
        expect.assertions(2)

        try {
            const input: ISignupInputDTO = {
                name: "Astro",
                email: "astrodev@gmail.com",
                password: "1234123"
            }
            
            const response = await userBusiness.signup(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(409)
                expect(error.message).toBe("Email já cadastrado")
            }
        }
    })

})