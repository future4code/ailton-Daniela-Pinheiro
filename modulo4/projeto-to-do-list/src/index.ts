import express, { Express } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { postUser } from "./endpoints/postUser"
import { getUser } from "./endpoints/getUser"
import { putUser } from "./endpoints/putUser"

// Aplicação
const app: Express = express()
app.use(express.json())
app.use(cors())

// Endpoints Usuário
app.post("/user", postUser)

app.get("/user/all")

app.put("/user/edit/:id", putUser)

app.get("/user/:id", getUser)



// Endpoints Tarefas
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