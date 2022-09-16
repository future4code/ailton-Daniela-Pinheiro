import { User } from "../model/user"
import { BaseDataBase } from "./baseDataBase"

export class UserData extends BaseDataBase {
    private static tableName = "cookenu_user"

    async getUserByEmail(email: string): Promise<User[]> {
        const result = await this.getConnection()
            .select('*')
            .from(UserData.tableName)
            .where({ email })

        return result
    }

    async createUser(user: User): Promise<void> {
        await this.getConnection()
            .insert(user)
            .into(UserData.tableName)
    }
}