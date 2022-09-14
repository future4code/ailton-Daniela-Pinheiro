import { Request, Response } from "express"
import { createUser } from "../../data/user/createUser"


export const postUser = async (req: Request, res: Response) => {
    try {
        const { name, nickname, email } = req.body

        // Verificações
        if(!name || !nickname || !email) {
            res.statusCode = 422
            throw new Error("Todas as informações são obrigatórias")
        }
        if(typeof name !== "string" || typeof nickname !== "string" || typeof email !== "string") {
            res.statusCode = 422
            throw new Error("Todas as informações devem ser strings.")
        }

        // Cria o usuário
        await createUser(name, nickname, email)
        // Resposta
        res.status(201).send({ message: "Usuário criado com sucesso!" })
    } catch (error: any) {
        res.send({ message: error.message || error.sqlMessage })
    }
}