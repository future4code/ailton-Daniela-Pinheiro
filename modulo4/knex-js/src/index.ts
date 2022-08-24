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


// Exercício 1
// a
const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
    return result[0][0]
}

app.get("/users/:id", async (req, res) => {
    try {
        const id = req.params.id
        console.log(await getActorById(id))
        res.end()
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

// b
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = '${name}'
    `)
    return result[0][0]
}

app.get("/users", async (req, res) => {
    try {
        const name: string = req.query.name as string
        console.log(await getActorByName(name))
        res.end()    
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

// c
const countActorsByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
    `)
    return result[0][0].count
}


// Exercicio 2
// a)
const changeSalary = async (id: string, salary: number): Promise<any> => {
    await connection('Actor')
        .where({ id: id })
        .update({ salary: salary })
}

// b)
const deleteActor = async (id: string): Promise<any> => {
    await connection('Actor')
        .where({ id: id })
        .del()
}

// c)
const averageSalary = async (gender: string): Promise<any> => {
    const result = await connection('Actor')
        .where({ gender: gender })
        .avg('salary as average')
    return result[0].average
}

// Exercicio 3
// a) 
app.get("/actor/:id", async (req, res) => {
    try {
      const id = req.params.id
      const actor = await getActorById(id)
  
      res.status(200).send(actor)
    } catch (err: any) {
      res.status(400).send({ message: err.message, })
    }
})

// b)
app.get("/actor", async (req, res) => {
    try {
        const gender: string = req.query.gender as string
        const actors = await countActorsByGender(gender)

        res.status(200).send({ quantity: actors })
    } catch (err: any) {
        res.status(400).send({ message: err.message })    
    }
})

// Exercicio 4
// a)


// b)


// Servidor
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo
       console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
       console.error(`Failure upon starting server.`)
    }
})