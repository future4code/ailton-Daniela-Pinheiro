import { UserDatabase } from "../data/UserDatabase"
import { ILoginInput, ISignupInput, IUserDB, User, USER_ROLES } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public signUp = async(input: ISignupInput): Promise<string> => {
        const { name, email, password, role } = input

        if(!name || !email || !password) {
            throw new Error("É preciso passar um nome, um e-mail e uma senha.")
        }
        if(typeof name !== "string" || typeof email !== "string" || typeof password !== "string") {
            throw new Error("Todas as informações devem ser do tipo string.")
        }
        if(name.length < 3) {
            throw new Error("O nome deve ter pelo menos 3 caracteres.")
        }
        if(password.length < 6) {
            throw new Error("A senha deve ter pelo menos 6 caracteres.")
        }
        if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error("E-mail inválido.")
        }
        
        let userRole: USER_ROLES = USER_ROLES.NORMAL
        if(role && role === "ADMIN") {
            userRole = USER_ROLES.ADMIN
        }

        const registeredUser = await this.userDatabase.searchUserByEmail(email)

        if(registeredUser) {
            throw new Error("E-mail já cadastrado.")
        }

        const id: string = this.idGenerator.generateId()
        const hashPassword: string = await this.hashManager.generateHash(password)

        const newUser = new User(
            id,
            name,
            email,
            hashPassword,
            userRole
        )
        
        await this.userDatabase.createUser(newUser)

        const payload: ITokenPayload = {
            id: id,
            role: userRole
        }
        const token: string = this.authenticator.generateToken(payload)

        return token
    }

    public login = async(input: ILoginInput): Promise<string> => {
        const { email, password } = input

        if(!email || !password) {
            throw new Error("É preciso passar um e-mail e uma senha.")
        }
        if(typeof email !== "string" || typeof password !== "string") {
            throw new Error("Todas as informações devem ser do tipo string.")
        }
        if(password.length < 6) {
            throw new Error("A senha deve ter pelo menos 6 caracteres.")
        }
        if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error("E-mail inválido.")
        }

        const registeredUser = await this.userDatabase.searchUserByEmail(email)

        if(!registeredUser) {
            throw new Error("Usuário não encontrado.")
        }




        return "token"
    }
}