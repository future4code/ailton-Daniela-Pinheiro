import { Router } from "express"
import { PersonBusiness } from "../business/PersonBusiness"
import { PersonController } from "../controller/PersonController"
import { PersonDatabase } from "../data/PersonDatabase"
import { IdGenerator } from "../services/IdGenerator"

export const personRouter = Router()

const personController = new PersonController(
    new PersonBusiness(
        new IdGenerator,
        new PersonDatabase
    )
)

personRouter.get("/", personController.getAllPersons)
personRouter.post("/", personController.createPerson)