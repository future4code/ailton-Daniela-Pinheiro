import { Request, Response } from "express"
import { createUser } from "../data/createUser"
import { searchUserByEmail } from "../data/searchUserByEmail"
import { generateId } from "../services/generateId"
import { generateToken } from "../services/generateToken"

export const userLogin = async(req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body

        if(!email || !email.includes("@")) {
            res.statusCode = 422
            throw new Error("E-mail inválido.")
        }

        const user = await searchUserByEmail(email)

        if(password !== user.password) {
            res.statusCode = 401
            throw new Error("Senha inválida.")
        }

        const token = generateToken({ id: user.id })

        res.status(200).send({ token: token })
    } catch (error: any) {
        res.status( res.statusCode || 500 ).send({ message: error.message || error.sqlMessage })
    }
}