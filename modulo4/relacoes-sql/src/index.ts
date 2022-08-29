import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { connection } from "./data/baseDataBase"

// Aplicação
const app = express()
app.use(express.json())
app.use(cors())

// Exercicio 1
const addRating = async (id: string, comment: string, rate: number, movieId: string): Promise<any> => {
    const result = await connection.raw(`
        INSERT INTO Rating
        VALUES (
            '${id}',
            '${comment}',
            ${rate},
            '${movieId}'
        )
    `)

    return result[0][0]
}

// (async () => {
//     console.log(await addRating("r006", "Bonito", 7, "002") )
// })()

// Exercicio 2
const addMovieCast = async (actorId: string, movieId: string): Promise<any> => {
    const result = await connection.raw(`
        INSERT INTO MovieCast VALUES ('${actorId}', '${movieId}')
    `)

    return result[0][0]
}

// (async () => {
//     console.log(await addMovieCast("006", "002") )
// })()

// Servidor
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo
       console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
       console.error(`Failure upon starting server.`)
    }
})