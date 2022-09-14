import { connection } from "../dataBase"
import { generateId } from "../generateId"


export const createUser = async(name: string, nickname: string, email: string): Promise<any> => {
    const result = await connection('ListUser')
        .insert({
            id: generateId(nickname),
            name: name,
            nickname: nickname,
            email: email
        })
    
    return result
}