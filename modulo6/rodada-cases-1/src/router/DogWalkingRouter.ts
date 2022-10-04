import { Router } from "express"
import { DogWalkingController } from "../controller/DogWalkingController"
import { app } from "../app"

export const DogWalkingRouter = Router()
const dogWalkingController = new DogWalkingController(
    // injeção
)

app.get("/", dogWalkingController.index)
app.post("/create", dogWalkingController.create)