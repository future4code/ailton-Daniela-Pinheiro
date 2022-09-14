import { connection } from "../dataBase"

export const selectAllUsers = async(): Promise<any> => {
    const result = await connection('ListUser').select('*')
    
    return result
}