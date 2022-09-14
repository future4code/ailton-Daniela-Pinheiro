import { Request, Response } from "express"
import { createUser } from "../data/createUser"
import { generateId } from "../services/generateId"
import { generateToken } from "../services/generateToken"

export const userSignUp = async(req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body

        if(!email || !email.includes("@")) {
            res.statusCode = 422
            throw new Error("E-mail inválido.")
        }
        if(!password || password.length < 6) {
            res.statusCode = 422
            throw new Error("Senha inválida.")
        }

        const id: string = generateId()

        await createUser(id, email, password)

        const token = generateToken({ id })

        res.status(200).send({ token: token })
    } catch (error: any) {
        res.status( res.statusCode || 500 ).send({ message: error.message || error.sqlMessage })
    }
}