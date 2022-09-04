import { Request, Response } from "express"
import { selectUsers } from "../../data/users/selectUsers"
import { selectUsersPurchases } from "../../data/users/selectUsersPurchases"
import { Purchase, User } from "../../types"

export const getUsers = async(req: Request, res: Response): Promise<any> => {
    try {
        const order: string = req.query.order as string
        let search: string = req.query.search as string

        if(!search) {
            search = ""
        }

        // Seleciona os usuários
        const users: User[] = await selectUsers(order, search)

        // Resposta
        res.send({ users: users})
    } catch (error: any) {
        res.status( res.statusCode || 500 ).send({ message: error.message || error.sqlMessage})
    }
}