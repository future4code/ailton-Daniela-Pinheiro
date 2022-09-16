import { User } from "../model/user"
import { BaseDataBase } from "./baseDataBase"

export class UserData extends BaseDataBase {
    private static tableName = "cookenu_user"

    async getUserByEmail(email: string): Promise< User | undefined > {
        const result = await this.getConnection()
            .select('*')
            .from(UserData.tableName)
            .where({ email })

        if(!result.length) {
            return undefined
        } else {
            const user = new User(
                result[0].id,
                result[0].name,
                result[0].email,
                result[0].password
            )
    
            return user
        }
    }

    async createUser(user: User): Promise<void> {
        await this.getConnection()
            .insert(user)
            .into(UserData.tableName)
    }
}