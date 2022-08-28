import { connection } from "../dataBase"

export const selectTaskOfUser = async(id: string): Promise<any> => {
    const result = await connection('ListUser')
        .select('*')
        .rightJoin('TaskList', { 'TaskList.creator_user_id': 'ListUser.id' })
        .where({ 'ListUser.id': id })
    
    return result
}