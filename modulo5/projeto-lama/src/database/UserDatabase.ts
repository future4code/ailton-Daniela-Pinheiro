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

    public createUser = async(user: User): Promise<void> => {
        const newUser: IUserDB = this.toUserDBModel(user)

        await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .insert(newUser)
    }
}