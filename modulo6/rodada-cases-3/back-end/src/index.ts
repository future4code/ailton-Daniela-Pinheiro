import dotenv from "dotenv"
import { app } from "./app"
import { personRouter } from "./router/personRouter"

dotenv.config()

app.listen(process.env.PORT || 3003, () => {
    console.log(`Server running in port ${process.env.PORT || 3003}`)
})

app.use("/person", personRouter)