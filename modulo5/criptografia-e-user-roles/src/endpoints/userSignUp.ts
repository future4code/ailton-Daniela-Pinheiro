import { Request, Response } from "express"
import { createUser } from "../data/createUser"
import { generateHash } from "../services/hash"
import { generateId } from "../services/id"
import { generateToken } from "../services/token"

export const userSignUp = async(req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body
        let role = req.body.role

        if(!email || !email.includes("@")) {
            res.statusCode = 422
            throw new Error("E-mail inválido.")
        }
        if(!password || password.length < 6) {
            res.statusCode = 422
            throw new Error("Senha inválida.")
        }
        if(!role) {
            role = "normal"
        }

        const id: string = generateId()
        const hashPassword: string = await generateHash(password)

        await createUser(id, email, hashPassword, role)

        const token = generateToken({
            id,
            role
        })

        res.status(200).send({ token: token })
    } catch (error: any) {
        res.status( res.statusCode || 500 ).send({ message: error.message || error.sqlMessage })
    }
}