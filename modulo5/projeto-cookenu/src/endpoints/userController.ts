import { Request, Response } from "express"
import { createUser } from "../data/user"
import { User } from "../model/user"
import { HashManager } from "../services/hash"
import { IdGenerator } from "../services/id"
import { Authenticator } from "../services/token"


export default class UserController{
    async userSignUp(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body
    
            if(!name || !email || !password) {
                res.statusCode = 422
                throw new Error("É necessário informar um nome, um e-mail e uma senha.")
            }
            if(!email.includes("@")) {
                res.statusCode = 422
                throw new Error("E-mail inválido.")
            }
            if(password.length < 6) {
                res.statusCode = 422
                throw new Error("A senha deve ter pelo menos 6 caracteres.")
            }
    
            const idGenerator = new IdGenerator()
            const id = idGenerator.generateId()

            const hashManager = new HashManager()
            const hashPassword: string = await hashManager.generateHash(password)
    
            const user = new User(id, name, email, hashPassword)
            // console.log(user)
            await createUser(user)
    
            const authenticator = new Authenticator()
            const token = authenticator.generateToken({ id })
    
            res.status(201).send({ access_token: token })
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message || error.sqlMessage })
        }
    }

    // async userLogin() {

    // }
}