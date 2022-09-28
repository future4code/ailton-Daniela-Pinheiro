import { BaseDatabase } from "./BaseDatabase"
import { IUserDB, User } from "../models/User"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Labook_Users"

    public createUser = async(input: User) => {
        await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .insert({
                id: input.getId(),
                name: input.getName(),
                email: input.getEmail(),
                password: input.getPassword(),
                role: input.getRole()
            })
    }

    public searchUserByEmail = async(email: string): Promise<IUserDB | undefined> => {
        const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .select('*')
            .where({ email })

        if(!result.length) {
            return undefined
        } else {
            const user: IUserDB = {
                id: result[0].id,
                name: result[0].name,
                email: result[0].email,
                password: result[0].password,
                role: result[0].role
            }

            return user
        }
    }
}