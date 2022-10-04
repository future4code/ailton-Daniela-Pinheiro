import { app } from "./app"
import { DogWalkingRouter } from "./router/dogWalkingRouter"
import { petRouter } from "./router/petRouter"

app.use("/dog_walking", DogWalkingRouter)
app.use("/pets", petRouter)