import { User } from "../types"
import { connection } from "./connection"

export const selectUsers = async(): Promise<User[]> => {
    const result = await connection('labecommerce_user')

    return result
}