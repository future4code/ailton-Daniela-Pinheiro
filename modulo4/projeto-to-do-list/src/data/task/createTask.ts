import { connection } from "../dataBase"
import { generateId } from "../generateId"


export const createTask = async(
    title: string,
    description: string,
    limitDate: string,
    creatorUserId: string
    ): Promise<any> => {
    const result = await connection('TaskList')
        .insert({
            id: generateId(title),
            title: title,
            description: description,
            limit_date: new Date(limitDate),
            status: "to_do",
            creator_user_id: creatorUserId
        })
    
    return result
}