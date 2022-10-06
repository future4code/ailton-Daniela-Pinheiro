import { Router } from "express"
import { DogWalkingBusiness } from "../business/DogWalkingBusiness"
import { DogWalkingController } from "../controller/DogWalkingController"
import { DogWalkingDatabase } from "../database/DogWalkingDatabase"
import { IdGenerator } from "../services/IdGenerator"

export const DogWalkingRouter = Router()

const dogWalkingController = new DogWalkingController(
    new DogWalkingBusiness(
        new DogWalkingDatabase,
        new IdGenerator
    )
)

DogWalkingRouter.get("/", dogWalkingController.index)
DogWalkingRouter.post("/create", dogWalkingController.create)