import { IUserDB, User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Lama_Users"

    public toUserDBModel = (user: User): IUserDB => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        return userDB
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

    public createUser = async(user: User): Promise<void> => {
        const newUser: IUserDB = this.toUserDBModel(user)

        await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .insert(newUser)
    }
}