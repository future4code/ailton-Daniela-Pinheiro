import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { Produto, produtos } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

// Exercicio 1
app.get("/test", (req, res) => {
    res.send("API funcionando!")
})

// Exercicio 2
// em data.ts

// Exercicio 3
app.post("/product/add", (req, res) => {
    const {name, price} = req.body

    // Exercicio 7
    try {
        if(!name || !price) {
            res.statusCode = 400
            throw new Error("As propriedades name e price são obrigatórias.")
        } else if(typeof name !== 'string') {
            res.statusCode = 400
            throw new Error("A propriedade name deve ser um texto.")
        } else if(isNaN(price)) {
            res.statusCode = 400
            throw new Error("A propriedade price deve ser um número.")
        } else if(price <= 0) {
            res.statusCode = 400
            throw new Error("A propriedade price deve ser maior do que zero.")
        }
        else {
            const novoProduto: Produto = {
                id: String(produtos.length + 1),
                name: name,
                price: price
            }
            produtos.push(novoProduto)

            res.statusCode = 201
            res.send(produtos)
        }    
    } catch(error: any) {
        res.send({ message: error.message })
    }
})

// Exercicio 4
app.get("/products", (req, res) => {
    res.send(produtos)
})

// Exercicio 5
app.put("/product/editPrice/:id", (req, res) => {
    const idProduto = req.params.id
    const {price} = req.body

    const indiceProduto = produtos.findIndex(produto => {
        return produto.id === idProduto
    })

    // Exercicio 8
    try {
        if(price === undefined || price === null) {
            res.statusCode = 400
            throw new Error("A propriedade price é obrigatória.")
        } else if(isNaN(price)) {
            res.statusCode = 400
            throw new Error("A propriedade price deve ser um número.")
        } else if(price <= 0) {
            res.statusCode = 400
            throw new Error("A propriedade price deve ser maior do que zero.")
        } else if(indiceProduto === undefined || indiceProduto === null || indiceProduto < 0) {
            res.statusCode = 404
            throw new Error("Não há nenhum produto com essa id.")
        } else {
            produtos[indiceProduto].price = Number(price)
            res.send(produtos)
        } 
    } catch (error: any) {
        res.send({ message: error.message })
    }
})

// Exercicio 6
app.delete("/product/delete/:id", (req, res) => {
    const idProduto = req.params.id
    const novosProdutos = produtos.filter(produto => {
        return produto.id !== idProduto
    })

    // Exercicio 9
    try { 
        if(novosProdutos.length === produtos.length) {
            res.statusCode = 404
            throw new Error("Não há nenhum produto com essa id.")
        } else {
            res.send(novosProdutos)
        }
    } catch (error: any) {
        res.send({ message: error.message })
    } 
})


// Servidor
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
       console.error(`Failure upon starting server.`)
    }
})
