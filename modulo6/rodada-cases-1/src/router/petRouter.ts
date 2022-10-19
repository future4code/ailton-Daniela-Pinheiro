import { Router } from "express"
import { PetBusiness } from "../business/PetBusiness"
import { PetController } from "../controller/PetController"
import { PetDatabase } from "../database/PetDatabase"

export const petRouter = Router()

const petController = new PetController(
    new PetBusiness(
        new PetDatabase
    )
)

petRouter.get("/", petController.index)