import { connection } from "../data/dataBase"

export const selectUser = async(id: string): Promise<any> => {
    const result = await connection('ListUser')
        .select('*')
        .where({ id: id })
    
    return result[0]
}