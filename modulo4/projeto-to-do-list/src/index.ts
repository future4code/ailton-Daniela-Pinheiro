import express, { Express } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { postUser } from "./endpoints/postUser"
import { getUser } from "./endpoints/getUser"

// Aplicação
const app: Express = express()
app.use(express.json())
app.use(cors())

// Endpoints
app.post("/user", postUser)

app.get("/user/:id", getUser)


// app.put("/user/edit/:id")
// app.post("/task")
// app.get("/task/:id")

// Servidor
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo
       console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
       console.error(`Failure upon starting server.`)
    }
})