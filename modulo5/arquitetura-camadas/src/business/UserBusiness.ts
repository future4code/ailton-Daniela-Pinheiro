import { UserDatabase } from "../database/UserDatabase"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    public signUp = async(
        name: string,
        email: string,
        password: string,
        role?: USER_ROLES
    ): Promise<string> => {
        if(!name || !email || !password) {
            throw new Error("Todas as informações são obrigatórias.")
        }
        // ........

        let userRole: USER_ROLES = role? role : USER_ROLES.NORMAL

        const id: string = new IdGenerator().generate()
        const hashPassword: string = await new HashManager().hash(password)

        await new UserDatabase().createUser(id, name, email, hashPassword, userRole)

        const token: string = await new Authenticator().generateToken({ id: id, role: role || userRole })

        return token
    }

}