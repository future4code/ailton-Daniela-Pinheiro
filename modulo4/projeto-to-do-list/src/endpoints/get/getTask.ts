import { Request, Response } from "express"
import { selectTask } from "../../data/task/selectTask"

export const getTask = async (req: Request, res: Response): Promise<any> => {
    try {
        const taskId: string = req.params.id

        // Busca a tarefa
        const task = await selectTask(taskId)

        // Verificação
        if(!task) {
            res.statusCode = 404
            throw new Error("Tarefa não encontrada.")
        }

        // Resposta
        const date: string = `${task.limit_date.getDate()}/${`${task.limit_date.getMonth() + 1}`.padStart(2, '0')}/${task.limit_date.getFullYear()}`
        res.status(200).send({ task: {
            title: task.title,
            description: task.description,
            limitDate: date,
            status: task.status,
            creatorUserId: task.creator_user_id,
            creatorUserNickname: task.nickname
        }})

    } catch (error: any) {
        res.send({ message: error.message || error.sqlMessage })
    }
}