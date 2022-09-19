import { UserDatabase } from "../database/UserDatabase"
import { User, USER_ROLES } from "../models/User"
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
        if(typeof name !== "string" || typeof email !== "string" || typeof password !== "string") {
            throw new Error("As informações devem ser strings.")
        }
        if(name.length < 3) {
            throw new Error("Nome inválido.") 
        }
        if(!email.includes('@')) {
            throw new Error("E-mail inválido.")
        }
        if(password.length < 6) {
            throw new Error("Senha inválida.")
        }

        let userRole: USER_ROLES = role? role : USER_ROLES.NORMAL

        const id: string = new IdGenerator().generate()
        const hashPassword: string = await new HashManager().hash(password)

        await new UserDatabase().createUser(id, name, email, hashPassword, userRole)

        const token: string = await new Authenticator().generateToken({ id: id, role: role || userRole })

        return token
    }

    public login = async(email: string, password: string): Promise<string> => {
        if(!email || !password) {
            throw new Error("Todas as informações são obrigatórias.")
        }
        if(typeof email !== "string" || typeof password !== "string") {
            throw new Error("As informações devem ser strings.")
        }
        if(!email.includes('@')) {
            throw new Error("E-mail inválido.")
        }
        if(password.length < 6) {
            throw new Error("Senha inválida.")
        }

        const user: User | undefined = await new UserDatabase().searchUserByEmail(email)

        if(!user) {
            throw new Error("E-mail ou senha incorretos.")
        }

        const correctCredentials: boolean = await new HashManager().compare(password, user.getPassword())

        if(!correctCredentials) {
            throw new Error("E-mail ou senha incorretos.")
        }

        const token: string = new Authenticator().generateToken({ id: user.getId(), role: user.getRole() })

        return token
    }
}