import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { IGetUsersDTO, ILoginDTO, ISignUpDTO } from "../models/User"

export class UserController {
    public signUp = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const { name, email, password, role } = req.body

            const input: ISignUpDTO = { name, email, password, role }

            const token: string = await new UserBusiness().signUp(input)
            
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

            const input: ILoginDTO = { email, password }

            const token: string = await new UserBusiness().login(input)
            
            res.status(200).send({ access_token: token })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public getUsers = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token: string = req.headers.authorization as string
            const name: string | undefined = req.query.name as string

            const input: IGetUsersDTO = { token, name }
            const users = await new UserBusiness().getUsers(input)
            
            res.status(200).send({ users: users })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public deleteUser = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token: string = req.headers.authorization as string
            const id: string = req.params.id as string

            const input: IGetUsersDTO = { token, id }
            const response: string = await new UserBusiness().deleteUser(input)
            
            res.status(200).send({ message: response })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
}