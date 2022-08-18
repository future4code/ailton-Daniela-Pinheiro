import express from "express"
import cors from "cors"
import { AddressInfo } from "net"

const app = express()

app.use(express.json())
app.use(cors())

// Usuários
type User = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}
enum UserType {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

let users: User[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]

// Exercicio 1
// a. Método HTTP: GET
// b. Entidade = /users
app.get("/users", (req, res) => {
    // Exercicio 3
    // a. Tipo query
    try {
        const name: string = req.query.name as string

        if(name) {
            const queryUsers = users.filter(user => {
                return user.name.toLowerCase().includes(name.toLowerCase())
            })

            // b.
            if(queryUsers.length === 0) {
                res.statusCode = 404
                throw new Error("User not found.")
            }
            res.send(queryUsers) 
        } else {
            res.send(users)
        }
    } catch (error: any) {
        res.send({ message: error.message })
    }
})


// Exercicio 2
// a. Uma vez que só há dois tipos, o type foi passado como path params.
//    Assim, o envio dessa requisição pode estar condicionado a um select
//    contendo os dois tipos para serem escolhidos.
// b. Usando verificações (if) juntamente com o type User e o enum UserType.
app.get("/users/:type", (req, res) => {
    try {
        const type: string = req.params.type

        if(type !== "NORMAL" && type !== "ADMIN") {
            res.statusCode = 420
            throw new Error("Nonexistent type.")
        }

        const typeUsers = users.filter(user => { return user.type === type })
        res.send(typeUsers)
    } catch (error: any) {
        res.send({ message: error.message })
    } 
})


// Exercicio 4
app.post("/user", (req, res) => {
    try {
        const {id, name, email, type, age} = req.body

        if(!id || !name || !email || !type || !age) {
            res.statusCode = (420)
            throw new Error("All properties are required.")
        }
        const newUser: User = {
            id,
            name,
            email,
            type,
            age
        }

        if(!newUser) {
            res.statusCode = (420)
            throw new Error("Incorrect properties' type or value.")
        }

        users.push(newUser)
        res.status(201).send(users)
    } catch (error: any) {
        res.send({ message: error.message })
    }
})
// a. Nada muda.
// b. Neste caso, o método POST é mais apropriado, pois o endpoint cria um usuário novo.
//    O método PUT deve ser usado quando se quer alterar algum dado já existente.


// Exercicio 5
app.put("/user", (req, res) => {
    try {
        const {id, name, email, type, age} = req.body

        if(!id || !name || !email || !type || !age) {
            res.statusCode = (420)
            throw new Error("All properties are required.")
        }
        const editUser: User = {
            id,
            name,
            email,
            type,
            age
        }

        if(!editUser) {
            res.statusCode = (420)
            throw new Error("Incorrect properties' type or value.")
        }

        const userIndex: number = users.length - 1
        users[userIndex] = editUser

        res.end()
    } catch (error: any) {
        res.send({ message: error.message })
    }
})


// Exercicio 6
app.patch("/user", (req, res) => {
    try {
        const {name} = req.body

        if(!name) {
            res.statusCode = (420)
            throw new Error("Name is required.")
        } else if(typeof name !== 'string') {
            res.statusCode = (420)
            throw new Error("Name must be a string.")
        }

        const userIndex: number = users.length - 1
        users[userIndex].name = name

        res.end()
    } catch (error: any) {
        res.send({ message: error.message })
    }
})


// Exercicio 7
app.delete("/user/:id", (req, res) => {
    try {
        const userId: number = Number(req.params.id)
        
        if(isNaN(userId)) {
            res.statusCode = (420)
            throw new Error("Id must be a number.")
        }

        const newUsers: User[] = users.filter(user => {
            return user.id !== userId
        })
        res.send(newUsers)
    } catch (error: any) {
        res.send({ message: error.message })
    }
})


// Servidor
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo
       console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
       console.error(`Failure upon starting server.`)
    }
})