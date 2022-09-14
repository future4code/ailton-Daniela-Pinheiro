import { Request, Response } from "express"
import { getUserById } from "../data/getUserById"
import { getData } from "../services/token"
import { AuthData } from "../types"

export const userProfile = async(req: Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string

        const authData: AuthData = getData(token)

        if(authData.role !== "normal") {
            res.statusCode = 401
            throw new Error("Apenas usuários normais têm acesso a esse endpoint.")
        }

        const user = await getUserById(authData.id)

        res.status(200).send({
            id: user.id,
            email: user.email,
            role: user.role
        })
    } catch (error: any) {
        res.status( res.statusCode || 500 ).send({ message: error.message || error.sqlMessage })
    }
}