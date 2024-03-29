import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { BaseError } from "../errors/BaseError"
import { ILoginInput, ISignUpInput } from "../models/User"

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) {}

    public signUp = async(req: Request, res: Response) => {
        try {
            const { name, email, password } = req.body
    
            const input: ISignUpInput = { name, email, password }
    
            const response = await this.userBusiness.signUp(input)

            res.status(201).send(response)
        } catch (error) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao cadastrar usuário" })
        }
    }

    public login = async(req: Request, res: Response) => {
        try {
            const { email, password } = req.body

            const input: ILoginInput = { email, password }

            const response = await this.userBusiness.login(input)
            
            res.status(200).send(response)
        } catch (error) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao fazer login" })
        }
    }
}