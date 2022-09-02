import { Request, Response } from "express"
import { selectUsers } from "../data/selectUsers"
import { User } from "../types"

export const getUsers = async(req: Request, res: Response): Promise<any> => {
    try {
        // Seleciona os usuários
        const users: User[] = await selectUsers()

        // Resposta
        res.send({ users: users})
    } catch (error: any) {
        res.status( res.statusCode || 500 ).send({ message: error.message || error.sqlMessage})
    }
}