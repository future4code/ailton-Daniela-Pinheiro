import { User } from "../model/user"
import { connection } from "./connection"

export const createUser = async(user: User): Promise<void> => {
    await connection('cookenu_user')
        .insert(user)
}