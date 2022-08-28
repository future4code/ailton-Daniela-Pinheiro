import { Request, Response } from "express"
import { selectTaskOfUser } from "../../data/task/selectTaskOfUser"

export const getTaskOfUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const userId: string = req.query.creatorUserId as string

        // Verificação
        if(!userId) {
            res.statusCode = 422
            throw new Error("É necessário passar um id de usuário.")
        }

        // Busca as tarefas
        const tasks = await selectTaskOfUser(userId)

        // Tratamento das informações
        const taskList = tasks.length > 0 ?
            tasks.map((task: {
                id: string,
                title: string,
                description: string,
                status: string,
                limit_date: Date,
                creator_user_id: string,
                creator_user_nickname: string
            }) => {
                const date: string = `${task.limit_date.getDate()}/${`${task.limit_date.getMonth() + 1}`.padStart(2, '0')}/${task.limit_date.getFullYear()}`
                return {
                    taskId: task.id,
                    title: task.title,
                    description: task.description,
                    limitDate: date,
                    status: task.status,
                    creatorUserId: task.creator_user_id,
                    creatorUserNickname: task.creator_user_nickname
                }
            })
            : tasks

        // Resposta
        res.status(200).send({ tasks: taskList })
    } catch (error: any) {
        res.send({ message: error.message || error.sqlMessage }) 
    }
}