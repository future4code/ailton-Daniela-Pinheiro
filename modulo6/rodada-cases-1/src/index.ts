import { app } from "./app"
import { dogWalkingRouter } from "./router/dogWalkingRouter"
import { petRouter } from "./router/petRouter"

app.use("/dog_walking", dogWalkingRouter)
app.use("/pets", petRouter)