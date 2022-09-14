import { connection } from "../dataBase"

export const selectTask = async(id: string): Promise<any> => {
    const result = await connection('TaskList')
        .select('*')
        .join('ListUser', { 'TaskList.creator_user_id': 'ListUser.id' })
        .where({ 'TaskList.id': id })
    
    return result[0]
}