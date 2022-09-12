import { Request, Response } from "express"
import { searchUserById } from "../data/searchUserById"
import { getData } from "../services/getData"
import { AuthData } from "../types"

export const getUserProfile = async(req: Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string

        const authData: AuthData = getData(token)

        const user = await searchUserById(authData.id)

        res.status(200).send({
            id: user.id,
            email: user.email
        })
    } catch (error: any) {
        res.status( res.statusCode || 500 ).send({ message: error.message || error.sqlMessage })
    }
}