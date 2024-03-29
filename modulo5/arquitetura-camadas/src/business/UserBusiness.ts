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
        role?: string
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

        let userRole: USER_ROLES
        if(!role || role !== "ADMIN") {
            userRole = USER_ROLES.NORMAL
        }
        if(role && role === "ADMIN") {
            userRole = USER_ROLES.ADMIN
        }

        const id: string = new IdGenerator().generate()
        const hashPassword: string = await new HashManager().hash(password)

        await new UserDatabase().createUser(id, name, email, hashPassword, userRole)

        const token: string = await new Authenticator().generateToken({ id: id, role: userRole })

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

    public getUsers = async(token: string, name?: string): Promise<any[]> => {
        const queryName: string = name? name : ""

        if(!token) {
            throw new Error("Usuário não autorizado.")
        }

        const tokenData = new Authenticator().getTokenPayload(token)

        if(!tokenData) {
            throw new Error("Usuário não autorizado.")
        }

        const user: User = await new UserDatabase().searchUserById(tokenData.id)

        if(!user) {
            throw new Error("Usuário não autorizado.")
        }

        const result = await new UserDatabase().getUsers(queryName)

        const users = result.map(user => {
            return {
                id: user.id,
                name: user.name,
                email: user.email
            }
        })

        return users
    }

    public deleteUser = async(token: string, id: string): Promise<string> => {
        if(!token) {
            throw new Error("Usuário não autorizado.")
        }

        const tokenData = new Authenticator().getTokenPayload(token)
console.log(tokenData)
        if(!tokenData) {
            throw new Error("Usuário não autorizado.")
        }
        if(tokenData.role !== USER_ROLES.ADMIN) {
            throw new Error("Usuário não autorizado.")
        }
        if(tokenData.id === id) {
            throw new Error("Não é permitido deletar este usuário.")
        }

        await new UserDatabase().deleteUser(id)

        const response = "Usuário deletado com sucesso."

        return response
    }
}