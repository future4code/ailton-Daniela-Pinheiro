import { connection } from "./connection"

export const searchUserById = async(id: string): Promise<any> => {
    const result = await connection('UserTable')
        .where({ id })
    
    return result[0]
}