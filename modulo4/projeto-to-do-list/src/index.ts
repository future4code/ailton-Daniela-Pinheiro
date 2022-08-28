import express, { Express } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { postUser } from "./endpoints/post/postUser"
import { getUser } from "./endpoints/get/getUser"
import { putUser } from "./endpoints/put/putUser"
import { getAllUsers } from "./endpoints/get/getAllUsers"
import { postTask } from "./endpoints/post/postTask"
import { getTask } from "./endpoints/get/getTask"
import { putTaskStatus } from "./endpoints/put/putTaskStatus"

// Aplicação
const app: Express = express()
app.use(express.json())
app.use(cors())

// Endpoints Usuário
app.post("/user", postUser)

app.get("/user/all", getAllUsers)
app.get("/user/:id", getUser)

app.put("/user/edit/:id", putUser)


// Endpoints Tarefas
app.post("/task", postTask)

app.get("/task") //pegar tarefas de um usuário, id por query
app.get("/task/:id", getTask)

app.put("/task/status/:id", putTaskStatus) //testar

// Servidor
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo
       console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
       console.error(`Failure upon starting server.`)
    }
})