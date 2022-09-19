import { User, USER_ROLES } from "../models/User"
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

    public searchUserByEmail = async(email: string): Promise<User | undefined> => {
        const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .select('*')
            .where({ email })

        if(!result) {
            return undefined
        } else {
            const user: User = new User(
                result[0].id,
                result[0].name,
                result[0].email,
                result[0].password,
                result[0].role
            )
            
            return user
        }
    }

    public searchUserById = async(id: string): Promise<User | undefined> => {
        const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .select('*')
            .where({ id })

        if(!result) {
            return undefined
        } else {
            const user: User = new User(
                result[0].id,
                result[0].name,
                result[0].email,
                result[0].password,
                result[0].role
            )
            
            return user
        }
    }

    public getUsers = async(name: string): Promise<any[]> => {
        const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .select('*')
            .whereILike('name', `%${name}%`)

        return result
    }
}