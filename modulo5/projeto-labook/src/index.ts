import { app } from "./app"
import { postRouter } from "./router/postRouter"
import { userRouter } from "./router/userRouter"

app.use("/users", userRouter)
app.use("/posts", postRouter)