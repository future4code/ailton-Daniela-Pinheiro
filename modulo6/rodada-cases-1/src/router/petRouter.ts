import { Router } from "express"
import { PetBusiness } from "../business/PetBusiness"
import { PetController } from "../controller/PetController"
import { PetDatabase } from "../database/PetDatabase"
import { IdGenerator } from "../services/IdGenerator"

export const petRouter = Router()

const petController = new PetController(
    new PetBusiness(
        new PetDatabase,
        new IdGenerator
    )
)

petRouter.get("/", petController.index)