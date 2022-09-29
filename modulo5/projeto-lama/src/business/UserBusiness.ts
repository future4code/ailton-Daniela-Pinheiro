import { UserDatabase } from "../database/UserDatabase"
import { ParamsError } from "../errors/ParamsError";
import { ISignUpInput, ISignupOutput, User, USER_ROLES } from "../models/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public signUp = async(input: ISignUpInput): Promise<ISignupOutput> => {
        const { name, email, password } = input

        if(!name || !email || !password) {
            throw new ParamsError("Os parâmetros 'name', 'email' e 'password' são obrigatórios")
        }

        if (typeof name !== "string") {
            throw new ParamsError("Parâmetro 'name' inválido")
        }

        if (typeof email !== "string") {
            throw new ParamsError("Parâmetro 'email' inválido")
        }

        if (typeof password !== "string") {
            throw new ParamsError("Parâmetro 'password' inválido")
        }

        if (name.length < 3) {
            throw new ParamsError("Parâmetro 'name' deve ter mínimo de 3 caracteres")
        }

        if (password.length < 6) {
            throw new ParamsError("Parâmetro 'password' deve ter mínimo de 6 caracteres")
        }

        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            throw new ParamsError("Parâmetro 'email' inválido")
        }

        // verificar se email já está cadastrado

        const id: string = this.idGenerator.generateId()
        const hashPassword: string = await this.hashManager.generateHash(password)

        const user = new User(
            id,
            name,
            email,
            hashPassword,
            USER_ROLES.NORMAL
        )

        await this.userDatabase.createUser(user)

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }
        const token: string = this.authenticator.generateToken(payload)

        const response: ISignupOutput = {
            message: "Usuário cadastrado com sucesso",
            token
        }

        return response
    }
}