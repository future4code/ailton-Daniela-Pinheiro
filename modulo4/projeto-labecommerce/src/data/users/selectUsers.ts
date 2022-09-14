import { User } from "../../types"
import { connection } from "../connection"

export const selectUsers = async(order: string, search: string): Promise<User[]> => {
    const result = await connection('labecommerce_user')
        .whereILike('name', `%${search}%`)
        .orderBy('name', order)

    return result
}