import { Request, Response } from "express"
import { selectAllUsers } from "../../data/user/selectAllUsers"


export const getAllUsers = async (req: Request, res: Response): Promise<any> => {
    try {
        const users = await selectAllUsers()

        // Resposta
        res.status(200).send({ users: users })
    } catch (error: any) {
        res.send({ message: error.message || error.sqlMessage })
    }
}