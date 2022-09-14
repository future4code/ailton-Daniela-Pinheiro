import { Request, Response } from "express"
import { editTaskStatus } from "../../data/task/editTaskStatus"
import { selectTask } from "../../data/task/selectTask"

export const putTaskStatus = async(req: Request, res: Response): Promise<any> => {
    try {
        const taskId: string = req.params.id
        const { status } = req.body

        // Verificações
        if(!status) {
            res.statusCode = 422
            throw new Error("É preciso passar o novo status da tarefa.")
        }
        if(status !== "to_do" && status !== "doing" && status !== "done") {
            res.statusCode = 422
            throw new Error("O status deve ser igual a uma das três opções: 'to_do', 'doing', ou 'done'.")
        }

        // Busca a tarefa
        const task = await selectTask(taskId)

        // Verificação
        if(!task) {
            res.statusCode = 404
            throw new Error("Tarefa não encontrada.")
        }

        // Muda o status
        await editTaskStatus(taskId, status)

        // Resposta
        res.status(200).send({ message: "Status da tarefa alterado com sucesso!" })
    } catch (error: any) {
        res.send({ message: error.message || error.sqlMessage })
    }
}