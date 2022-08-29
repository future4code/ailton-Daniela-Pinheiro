import express, { request, response } from "express"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

// Exercicio 1
app.get("/", (request, response) => {
    response.send("Deu certo!")
})

// Exercicio 2
type Usuario = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
}

// Exercicio 3
const usuarios: Usuario[] = [
    {
        id: 1,
        name: "Red",
        phone: "0123-9865",
        email: "kantochamp@mail.com",
        website: "http://kantochamp.co.jp"
    },
    {
        id: 2,
        name: "Green",
        phone: "3728-9888",
        email: "midori@mail.com",
        website: "http://worst-rival.co.jp"
    },
    {
        id: 3,
        name: "Blue",
        phone: "2356-9001",
        email: "bluer@mail.com",
        website: "http://prettythief.co.jp"
    },
    {
        id: 4,
        name: "Gold",
        phone: "5567-1368",
        email: "goldeen@mail.com",
        website: "http://johtorlz.co.jp"
    },
    {
        id: 5,
        name: "Crystal",
        phone: "5483-8872",
        email: "crys@mail.com",
        website: "http://kicker-crys.co.jp"
    },
    {
        id: 6,
        name: "Deletar",
        phone: "0000-0000",
        email: "del@mail.com",
        website: "http://deleteee.co.jp"
    }
]

// Exercicio 4
app.get("/users", (request, response) => {
    response.send(usuarios)
})

// Exercicio 5
type Post = {
    id: number,
    title: string,
    body: string,
    userId: number
}

// Exercicio 6
const posts: Post[] = [
    {
        id: 1,
        title: "Pikachus <3",
        body: "Pika conheceu a pikachu da Yellow, os dois se deram super bem ;))",
        userId: 1
    },
    {
        id: 2,
        title: "Lugia",
        body: "Por que voas tão alto?",
        userId: 5
    },
    {
        id: 3,
        title: "fugindo do Oak",
        body: "acho que aquele squirtle era bem querido pra ele..",
        userId: 3
    },
    {
        id: 4,
        title: "deletar",
        body: "deletar esse post",
        userId: 2
    },
    {
        id: 5,
        title: "deletar 2.0",
        body: "deletar esse post também",
        userId: 2
    }
]

// Como a tipagem já pede um userId, não há necessidade de criar o array de posts dentro
// do array de usuários.
// A diferença estará na hora de acessar os dados. Deste modo, o userId deverá ser passado
// na requisição e usado para filtrar o array de posts.
// Se os posts estiverem dentro do array de usuários, o userId passado deveria ser usado
// para localizar o usuário para, então, acessar seus dados e seus posts
// A propriedade 'posts' dentro de cada usuário deveria, ainda, ser optativa

// Exercicio 7
app.get("/posts", (request, response) => {
    response.send(posts)
})

// Exercicio 8
app.get("/users/posts/:id", (request, response) => {
    const idUsuario: number = Number(request.params.id)
    const postsPorId: Post[] = posts.filter(post => {
        return post.userId === idUsuario
    }) 

    response.send(postsPorId)
})

// Exercicio 9
app.delete("/posts/:id", (request, response) => {
    const idPost: number = Number(request.params.id)

    const novosPosts: Post[] = posts.filter(post => {
        return post.id !== idPost
    })

    response.send(novosPosts)
})

// Exercicio 10
app.delete("/users/:id", (request, response) => {
    const idUsuario: number = Number(request.params.id)

    const novosUsuarios: Usuario[] = usuarios.filter(usuario => {
        return usuario.id !== idUsuario
    })

    response.send(novosUsuarios)
})


// Iniciar o servidor
app.listen(3003, () => {
    console.log("Servidor funcionando em http://localhost:3003")
})