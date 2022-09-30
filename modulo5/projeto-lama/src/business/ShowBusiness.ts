import { ShowDatabase } from "../database/ShowDatabase"
import { AuthenticationError } from "../errors/AuthenticationError"
import { AuthorizationError } from "../errors/AuthorizationError"
import { ConflictError } from "../errors/ConflictError"
import { ParamsError } from "../errors/ParamsError"
import { ICreateShowInput, Show } from "../models/Show"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    public stringToDate = (date: string): Date => {

        return new Date()
    }

    public dateToString = (date: Date): string => {
        const day: string = String(date.getDate()).padStart(2, "0")
        const month: string = String(Number(date.getMonth()) + 1).padStart(2, "0")
        const year: string = String(date.getFullYear())

        const dateString: string = year + "-" + month + "-" + day
        return dateString
    }

    public createShow = async(input: ICreateShowInput): Promise<string> => {
        const { token, band, startsAt } = input

        if(!token) {
            throw new AuthenticationError("É necessário passar um token de autorização")
        }

        if(!band || !startsAt) {
            throw new ParamsError("Os parâmetros 'band' e 'startsAt' são obrigatórios")
        }

        if (typeof band !== "string") {
            throw new ParamsError("Parâmetro 'band' inválido")
        }

        if (typeof startsAt !== "string") {
            throw new ParamsError("Parâmetro 'startsAt' inválido")
        }

        if(!startsAt.match(/(0\d{1}|1[0-2])\/([0-2]\d{1}|3[0-1])\/(19|20)\d{2}/)) {
            throw new ParamsError("Parâmetro 'startsAt' inválido: deve estar no formato mm/dd/aaaa")   
        }

        const showDate = new Date(startsAt)

        const lamaStartDate = new Date("12/05/2022")

        if(showDate < lamaStartDate) {
            throw new ParamsError("Parâmetro 'startsAt' inválido: a data do show não pode ser anterior a 5 de dezembro")
        }
        
        const dateAlreadyTaken = await this.showDatabase.searchShowByDate(showDate)

        if(dateAlreadyTaken) {
            throw new ConflictError("Já existe um show marcado nesta data")
        }

        const authorizedUser = this.authenticator.getTokenPayload(token)

        if(!authorizedUser || authorizedUser.role !== "ADMIN") {
            throw new AuthorizationError()
        }

        const id: string = this.idGenerator.generateId()

        const show = new Show(
            id,
            band,
            showDate
        )

        await this.showDatabase.createShow(show)

        const message: string = "Show cadastrado com sucesso!"
        return message
    }
}