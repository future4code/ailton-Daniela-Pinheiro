import express from "express"
import cors from "cors"
import knex from "knex"
import dotenv from "dotenv"
import { AddressInfo } from "net"

// Conexão com banco de dados
dotenv.config()

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
})

// Aplicação
const app = express()
app.use(express.json())
app.use(cors())

// Endpoints



// Servidor
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo
       console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
       console.error(`Failure upon starting server.`)
    }
})