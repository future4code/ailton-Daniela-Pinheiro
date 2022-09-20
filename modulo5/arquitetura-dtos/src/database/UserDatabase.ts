import { IUserDB, IUserOutputDB, User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"


export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Arq_Users"

    public createUser = async(input: IUserDB): Promise<void> => {
        await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .insert({
                id: input.id,
                name: input.name,
                email: input.email,
                password: input.password,
                role: input.role
            })
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

    public getUsers = async(name: string): Promise<IUserOutputDB[]> => {
        const users = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .select('id', 'name', 'email')
            .whereILike('name', `%${name}%`)

        return users
    }

    public deleteUser = async(id: string): Promise<void> => {
        await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .delete('*')
            .where({ id })
    }
}