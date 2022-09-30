import { Request, Response } from "express"
import { ShowBusiness } from "../business/ShowBusiness"
import { BaseError } from "../errors/BaseError"
import { ICreateShowInput } from "../models/Show"

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) {}

    public createShow = async(req: Request, res: Response) => {
        try {
            const { band, startsAt } = req.body
            const token: string = req.headers.authorization as string

            const input: ICreateShowInput = { token, band, startsAt }

            const message = await this.showBusiness.createShow(input)

            res.status(201).send({ message })
        } catch (error) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao cadastrar show" })
        }
    }
}