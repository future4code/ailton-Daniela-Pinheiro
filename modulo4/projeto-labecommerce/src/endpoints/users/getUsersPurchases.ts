import { Request, Response } from "express"
import { selectUsersPurchases } from "../../data/users/selectUsersPurchases"
import { Purchase } from "../../types"

export const getUsersPurchases = async(req: Request, res: Response): Promise<any> => {
    try {
        const userId: string = req.params.user_id

        const purchases: Purchase[] = await selectUsersPurchases(userId)

        // Resposta
        res.send({ purchases: purchases })
    } catch (error: any) {
        res.status( res.statusCode || 500 ).send({ message: error.message || error.sqlMessage })
    }
}