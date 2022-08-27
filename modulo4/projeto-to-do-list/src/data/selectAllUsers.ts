import { connection } from "../data/dataBase"
import { User } from "../types"

export const selectAllUsers = async(): Promise<any> => {
    const result: User[] = await connection('ListUser').select('*')
    
    return result
}