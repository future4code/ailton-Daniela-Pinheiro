import { Request, Response } from "express"
import { PersonBusiness } from "../business/PersonBusiness"
import { BaseError } from "../error/BaseError"

export class PersonController {
    constructor(
        private personBusiness: PersonBusiness
    ) {}

    public createPerson = async(req: Request, res: Response): Promise<void> => {
        try {
            
            res.status(201).send("")
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
            
            res.status(200).send("")
        } catch (error) {
            if(error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Unexpected error")
            }
        }
    }
}