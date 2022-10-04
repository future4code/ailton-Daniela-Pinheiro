import { app } from './app'
import { pingRouter } from './router/pingRouter'
import { showRouter } from './router/ShowRouter'
import { userRouter } from './router/UserRouter'

app.use("/ping", pingRouter)
app.use("/users", userRouter)
app.use("/shows", showRouter)