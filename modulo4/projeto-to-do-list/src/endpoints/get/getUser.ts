import { Request, Response } from "express"
import { selectUser } from "../../data/user/selectUser"

export const getUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const userId = req.params.id

        // Busca o usuário
        const user = await selectUser(userId)

        // Verificação
        if(!user) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado.")
        }

        // Resposta
        res.status(200).send({ user: {
            id: user.id,
            nickname: user.nickname
        }})
    } catch (error: any) {
        res.send({ message: error.message || error.sqlMessage })
    }
}