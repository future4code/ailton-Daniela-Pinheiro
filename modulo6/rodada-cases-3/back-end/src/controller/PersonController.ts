import { Request, Response } from "express"
import { PersonBusiness } from "../business/PersonBusiness"
import { BaseError } from "../error/BaseError"
import { IPersonInput } from "../models/Person"

export class PersonController {
    constructor(
        private personBusiness: PersonBusiness
    ) {}

    public createPerson = async(req: Request, res: Response): Promise<void> => {
        try {
            const input: IPersonInput = {
                name: req.body.name,
                surname: req.body.surname,
                participation: req.body.participation
            }

            const message = await this.personBusiness.createPerson(input)
            
            res.status(201).send({ message })
        } catch (error) {
            if(error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Unexpected error")
            }
        }
    }

    public getAllPersons = async(req: Request, res: Response): Promise<void> => {
        try {
            const persons = await this.personBusiness.getAllPersons()

            res.status(200).send({ persons })
        } catch (error) {
            if(error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Unexpected error")
            }
        }
    }
}