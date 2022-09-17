import { Request, Response } from "express"
import { MissingFields } from "../error/missingFields"
import { IncorrectCredentials } from "../error/incorrectCredentials"
import { User } from "../model/user"
import { HashManager } from "../services/hashManager"
import { IdGenerator } from "../services/idGenerator"
import { Authenticator } from "../services/authenticator"
import { UserData } from "../data/userData"
import { Unauthorized } from "../error/unauthorized"


export default class UserEndpoints{
    async signUp(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body
            const userData = new UserData()
    
            if(!name || !email || !password) {
                throw new MissingFields()
            }
            if(!email.includes("@")) {
                res.statusCode = 422
                throw new Error("E-mail inválido.")
            }
            if(password.length < 6) {
                res.statusCode = 422
                throw new Error("A senha deve ter pelo menos 6 caracteres.")
            }

            const emailAlreadyExists = await userData.getUserByEmail(email)

            if(emailAlreadyExists) {
                res.statusCode = 409
                throw new Error("E-mail já cadastrado.")
            }
    
            const id = new IdGenerator().generateId()
            const hashPassword: string = await new HashManager().generateHash(password)

            const user = new User(id, name, email, hashPassword)
            await userData.createUser(user)
    
            const token = new Authenticator().generateToken({ id })
    
            res.status(201).send({ access_token: token })
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message || error.sqlMessage })
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body
            const userData = new UserData()

            if(!email || !password) {
                throw new MissingFields()
            }

            const user = await userData.getUserByEmail(email)

            if(!user) {
                throw new IncorrectCredentials()
            }

            const correctPassword = await new HashManager().compareHash(password, user.getPassword())

            if(!correctPassword) {
                throw new IncorrectCredentials()
            }

            const token = new Authenticator().generateToken({ id: user.getId() })

            res.status(200).send({ access_token: token })
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message || error.sqlMessage })
        }
    }

    async getProfile(req: Request, res: Response) {
        try {
            const token: string = req.headers.authorization as string

            const { id } = new Authenticator().getTokenData(token)

            const authorizedUser = await new UserData().getUserById(id)

            if(!authorizedUser){
                throw new Unauthorized()
            }

            res.status(200).send({
                id: authorizedUser.getId(),
                name: authorizedUser.getName(),
                email: authorizedUser.getEmail()
            })
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message || error.sqlMessage })
        }
    }

    async getOthersProfile(req: Request, res: Response) {
        try {
            const token: string = req.headers.authorization as string
            const userId: string = req.params.id
            const userData = new UserData()

            const { id } = new Authenticator().getTokenData(token)

            const authorizedUser = await userData.getUserById(id)
            if(!authorizedUser){
                throw new Unauthorized()
            }

            const user = await userData.getUserById(userId)

            if(!user){
                res.statusCode = 404
                throw new Error("Usuário não encontrado.")
            }

            res.status(200).send({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail()
            })
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message || error.sqlMessage })
        }
    }
}