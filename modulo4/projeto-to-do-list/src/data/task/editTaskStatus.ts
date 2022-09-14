import { connection } from "../dataBase"

export const editTaskStatus = async(id: string, status: string): Promise<any> => {
    const result = await connection('TaskList')
        .where({ id: id })
        .update({
            status: status
        })
    
    return result
}