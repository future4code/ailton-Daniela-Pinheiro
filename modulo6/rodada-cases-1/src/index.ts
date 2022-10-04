import { app } from "./app"
import { DogWalkingRouter } from "./router/DogWalkingRouter"

app.use("/dog_walking", DogWalkingRouter)