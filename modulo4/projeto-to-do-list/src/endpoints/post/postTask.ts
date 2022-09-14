import { Request, Response } from "express"
import { createTask } from "../../data/task/createTask"

export const postTask = async(req: Request, res: Response): Promise<any> => {
        try {
            const{ title, description, limitDate, creatorUserId } = req.body

            // Verificações
            if(!title || !description || !limitDate || !creatorUserId) {
                res.statusCode = 422
                throw new Error("Todas as informações são obrigatórias.")
            }
            if(typeof title !== "string" || typeof description !== "string" || typeof limitDate !== "string" || typeof creatorUserId !== "string") {
                res.statusCode = 422
                throw new Error("Todas as informações devem ser strings.")
            }

            // Cria a tarefa
            const date: string = limitDate.split("/").reverse().join("/")
            await createTask(title, description, date, creatorUserId)

            // Resposta
            res.status(201).send({ message: "Tarefa criada com sucesso!" })
        } catch (error: any) {
            res.send({ message: error.message || error.sqlMessage })
        }
}