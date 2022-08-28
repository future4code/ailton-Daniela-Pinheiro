import { connection } from "../dataBase"

export const editUser = async(id: string, name: string, nickname: string): Promise<any> => {
    const result = await connection('ListUser')
        .where({ id: id })
        .update({
            name: name,
            nickname: nickname
        })
    
    return result
}