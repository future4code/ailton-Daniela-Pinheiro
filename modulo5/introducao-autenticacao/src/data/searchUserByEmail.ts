import { connection } from "./connection"

export const searchUserByEmail = async(email: string): Promise<any> => {
    const result = await connection('UserTable')
        .where({ email })
    
    return result[0]
}