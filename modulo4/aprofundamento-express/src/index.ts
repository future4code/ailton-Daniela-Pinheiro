import express from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'

const app = express()

app.use(cors())
app.use(express.json())

// Exercicio 1
app.get("/ping", (req, res) => {
    res.send("pong!")
})

// Exercicio 2
type Afazer = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

// Exercicio 3
const afazeres: Afazer[] = [
    {
        userId: 1,
        id: 1,
        title: "Ler 100 páginas",
        completed: true
    },
    {
        userId: 1,
        id: 2,
        title: "Caminhar por 30min",
        completed: false
    },
    {
        userId: 2,
        id: 3,
        title: "Comprar presente de aniversário",
        completed: false
    },
    {
        userId: 5,
        id: 4,
        title: "Escrever letra da música nova",
        completed: true
    }
]

// Exercicio 4
app.get("/tasks", (req, res) => {
    const afazeresEmAndamento: Afazer[] = afazeres.filter(afazer => {
        return !afazer.completed
    })

    res.send(afazeresEmAndamento)
})

// Exercicio 5
app.post("/task/create", (req, res) => {
    const body: Afazer = req.body
    afazeres.push(body)

    res.send(afazeres)
})

// Exercicio 6
app.put("/task/status/:id", (req, res) => {
    const idAfazer: number = Number(req.params.id)
    const {completed} = req.body

    const afazerAtualizado = afazeres.filter(afazer => {
        return afazer.id === idAfazer
    })

    afazerAtualizado[0].completed = completed

    res.send(afazerAtualizado)
})

// Exercicio 7
app.delete("/task/delete/:id", (req, res) => {
    const idAfazer: number = Number(req.params.id)

    const afazeresAtualizados = afazeres.filter(afazer => {
        return afazer.id !== idAfazer
    })

    res.send(afazeresAtualizados)
})

// Exercicio 8


// Exercicio 9


// Servidor
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Servidor funcionando em http://localhost: ${address.port}`)
    } else {
       console.error(`Falha ao iniciar o servidor.`)
    }
})