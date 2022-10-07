import { Router } from "express"
import { DogWalkingBusiness } from "../business/DogWalkingBusiness"
import { DogWalkingController } from "../controller/DogWalkingController"
import { DogWalkingDatabase } from "../database/DogWalkingDatabase"
import { IdGenerator } from "../services/IdGenerator"

export const dogWalkingRouter = Router()

const dogWalkingController = new DogWalkingController(
    new DogWalkingBusiness(
        new DogWalkingDatabase,
        new IdGenerator
    )
)

dogWalkingRouter.get("/", dogWalkingController.index)
// dogWalkingRouter.get("/show/:id", dogWalkingController.index)
dogWalkingRouter.post("/create", dogWalkingController.create)
dogWalkingRouter.put("/start_walk/:id", dogWalkingController.startWalk)
dogWalkingRouter.put("/finish_walk/:id", dogWalkingController.finishWalk)