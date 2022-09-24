import { BaseDatabase } from "./BaseDatabase"
import { IUserDB } from "../models/User"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Labook_Users"

    public createUser = async(input: IUserDB) => {
        await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .insert(input)
    }

    public searchUserByEmail = async(email: string): Promise<IUserDB | undefined> => {
        const result = await BaseDatabase.connection()
            .select('*')
            .from(UserDatabase.TABLE_USERS)
            .where({ email })

        if(!result) {
            return undefined
        } else {
            const user: IUserDB = {
                id: result[0].id,
                name: result[0].name,
                email: result[0].email,
                password: result[0].password,
                role: result[0].role
            }

            // ver qual é a melhor saída
            // const user: User = new User(
            //     result[0].id,
            //     result[0].name,
            //     result[0].email,
            //     result[0].password,
            //     result[0].role
            // )

            return user
        }
    }
}