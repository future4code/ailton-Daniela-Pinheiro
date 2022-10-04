import { Router } from "express"
import { DogWalkingController } from "../controller/DogWalkingController"

export const DogWalkingRouter = Router()

const dogWalkingController = new DogWalkingController(
    // injeção
)

DogWalkingRouter.get("/", dogWalkingController.index)
DogWalkingRouter.post("/create", dogWalkingController.create)