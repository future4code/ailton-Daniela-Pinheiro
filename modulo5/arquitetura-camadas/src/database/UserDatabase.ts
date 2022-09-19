import { USER_ROLES } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Arq_Users"

    public createUser = async(
        id: string,
        name: string,
        email: string,
        password: string,
        role?: USER_ROLES
        ) => {
        await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .insert({ id, name, email, password, role })
    }
}