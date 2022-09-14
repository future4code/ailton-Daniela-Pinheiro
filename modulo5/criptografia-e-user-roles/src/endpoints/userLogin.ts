import { Request, Response } from "express"
import { getUserByEmail } from "../data/getUserByEmail"
import { compareHash } from "../services/hash"
import { generateToken } from "../services/token"

export const userLogin = async(req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body

        if(!email || !email.includes("@")) {
            res.statusCode = 422
            throw new Error("E-mail inválido.")
        }

        const user = await getUserByEmail(email)

        const correctCredentials: boolean = await compareHash(password, user.password)

        if(!correctCredentials) {
            res.statusCode = 401
            throw new Error("E-mail ou senha inválidos.")
        }

        const token = generateToken({
            id: user.id,
            role: user.role
        })

        res.status(200).send({ token: token })
    } catch (error: any) {
        res.status( res.statusCode || 500 ).send({ message: error.message || error.sqlMessage })
    }
}