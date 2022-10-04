import { describe, expect, test } from "@jest/globals"
import { UserBusiness } from "../src/business/UserBusiness"
import { UserDatabaseMock } from "./mocks/UserDatabaseMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { HashManagerMock } from "./mocks/HashManagerMock"
import { ILoginInput, ISignUpInput } from "../src/models/User"
import { BaseError } from "../src/errors/BaseError"

describe("Testando a UserBusiness", () => {
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

    test("Testando o signup: deve retornar uma mensagem de erro de 'name' inválido", async() => {
        expect.assertions(2)

        try {
            const input: ISignUpInput = {
                name: "10",
                email: "fulano@gmail.com",
                password: "password-mock"
            }
    
            const response = await userBusiness.signUp(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)  
                expect(error.message).toBe("Parâmetro 'name' deve ter mínimo de 3 caracteres")
            }
        }
    })

    test("Testando o signup: deve retornar uma mensagem de erro de 'email' inválido", async() => {
        expect.assertions(2)

        try {
            const input: ISignUpInput = {
                name: "Fulano",
                email: "fulanomail.com",
                password: "password-mock"
            }
    
            const response = await userBusiness.signUp(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)  
                expect(error.message).toBe("Parâmetro 'email' inválido")
            }
        }
    })

    test("Testando o signup: deve retornar uma mensagem de erro de email já cadastrado", async() => {
        expect.assertions(2)

        try {
            const input: ISignUpInput = {
                name: "User Mock",
                email: "usermock@gmail.com",
                password: "password-mock"
            }
    
            const response = await userBusiness.signUp(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(409)  
                expect(error.message).toBe("Email já cadastrado")
            }
        }
    })

    test("Testando o signup: deve retornar uma mensagem de erro de parâmetros fantando", async() => {
        expect.assertions(2)

        try {
            const input: ISignUpInput = {
                name: "User Mock",
                email: "",
                password: "password-mock"
            }
    
            const response = await userBusiness.signUp(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)  
                expect(error.message).toBe("Os parâmetros 'name', 'email' e 'password' são obrigatórios")
            }
        }
    })

    test("Testando o signup: deve retornar uma mensagem de erro de 'password' inválido", async() => {
        expect.assertions(2)

        try {
            const input: ISignUpInput = {
                name: "Fulano",
                email: "fulano@gmail.com",
                password: "123"
            }
    
            const response = await userBusiness.signUp(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)  
                expect(error.message).toBe("Parâmetro 'password' deve ter mínimo de 6 caracteres")
            }
        }
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

    test("Testando o login: deve retornar uma mensagem de erro de parâmetros faltando", async() => {
        expect.assertions(2)

        try {
            const input: ILoginInput = {
                email: "",
                password: "bananinha"
            }
    
            const response = await userBusiness.login(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)  
                expect(error.message).toBe("Os parâmetros 'email' e 'password' são obrigatórios")
            }
        }
    })
})