import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import knex from "knex"
import { AddressInfo } from "net"

// Aplicação
const app = express()
app.use(express.json())
app.use(cors())

// Conexão com o banco de dados
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

// Exercício 1


// Exercício 2
// Exercício 3

// Servidor
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo
       console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
       console.error(`Failure upon starting server.`)
    }
})