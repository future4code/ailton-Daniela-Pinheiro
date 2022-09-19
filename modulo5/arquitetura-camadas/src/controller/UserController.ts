import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"

export class UserController {
    public signUp = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const { name, email, password } = req.body

            const token: string = await new UserBusiness().signUp(name, email, password)
            
            res.status(201).send({
                message: "Usuário criado com sucesso!",
                access_token: token
            })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public login = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const { email, password } = req.body

            const token: string = await new UserBusiness().login(email, password)
            
            res.status(200).send({ access_token: token })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
}