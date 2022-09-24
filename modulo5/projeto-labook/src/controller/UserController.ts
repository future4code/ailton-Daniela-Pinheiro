import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { ISignupInput } from "../models/User"

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) {}

    public signUp = async(req: Request, res: Response) => {
        let statusCode = 400
        try {
            const input: ISignupInput = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
            
            const token: string = await this.userBusiness.signUp(input)

            res.status(201).send({
                message: "Usuário cadastrado com sucesso.",
                access_token: token
            })
        } catch (error: any) {
            res.status(statusCode).send({ message: error.message })  
        }
    }
}