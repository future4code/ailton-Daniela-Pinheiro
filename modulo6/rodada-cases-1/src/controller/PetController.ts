import { Request, Response } from "express"
import { PetBusiness } from "../business/PetBusiness"
import { BaseError } from "../errors/BaseError"

export class PetController {
    constructor(
        public petBusiness: PetBusiness
    ) {}

    public index = async(req: Request, res: Response) => {
        try {
            const pets = await this.petBusiness.getPets()

            res.status(200).send({ pets })
        } catch (error) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao buscar pets" })
        }
    }
}