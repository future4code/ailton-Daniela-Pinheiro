import { Request, Response } from "express"
import { editUser } from "../../data/user/editUser"
import { selectUser } from "../../data/user/selectUser"

export const putUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const userId = req.params.id
        const { name, nickname } = req.body

        // Busca o usuário
        const user = await selectUser(userId)

        // Verificações
        if(!name || !nickname) {
            res.statusCode = 422
            throw new Error("Todas as informações são obrigatórias")
        }
        if(typeof name !== "string" || typeof nickname !== "string") {
            res.statusCode = 422
            throw new Error("Todas as informações devem ser strings.")
        }
        if(!user) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado.")
        }

        // Altera as informações
        await editUser(userId, name, nickname)

        // Resposta
        res.status(200).send({ user: {
            name: name,
            nickname: nickname
        }})
    } catch (error: any) {
        res.send({ message: error.message || error.sqlMessage })
    }
}