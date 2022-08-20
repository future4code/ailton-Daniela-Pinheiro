import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { contas, ContaUsuario } from "./data"

const app = express()
app.use(express.json())
app.use(cors())


// ENDPOINT PEGAR LISTA DE CONTAS
app.get("/users", (req, res) => {
    res.send({contas: contas})
})


// ENDPOINT CRIAR CONTA DE USUÁRIO
app.post("/users", (req, res) => {
    try {
        const { nome, cpf, dataNascimento } = req.body
        
        // VERIFICAÇÃO DAS INFORMAÇÕES
        if(!nome || !cpf || !dataNascimento){
            res.statusCode = 422
            throw new Error("Todas as informações são obrigatórias.")
        }
        if(isNaN(cpf)){
            res.statusCode = 422
            throw new Error("O CPF deve ser um número.")
        }

        // VERIFICAÇÃO DE IDADE
        const dataAtual: Date = new Date()
        const anoAtual: number = dataAtual.getFullYear()
        const mesAtual: number = dataAtual.getMonth() + 1
        const diaAtual: number = dataAtual.getDate()

        const dataDeNascimento: Date = new Date(dataNascimento)
        const anoNascimento: number = dataDeNascimento.getFullYear()
        const mesNascimento: number = dataDeNascimento.getMonth() + 1
        const diaNascimento: number = dataDeNascimento.getDate()

        if(anoAtual - anoNascimento < 18) {
            res.statusCode = 401
            throw new Error("É necessário ser maior de 18 anos para abrir uma conta.")
        }
        if((anoAtual - anoNascimento) === 18) {
            if(mesAtual < mesNascimento) {
                res.statusCode = 401
                throw new Error("É necessário ser maior de 18 anos para abrir uma conta.")
            }
            if((mesAtual === mesNascimento) && (diaAtual < diaNascimento)) {
                res.statusCode = 401
                throw new Error("É necessário ser maior de 18 anos para abrir uma conta.")
            }
        }

        // VERIFICAÇÃO DE CPF
        const cpfCadastrado: ContaUsuario[] = contas.filter(conta => {
            return conta.cpf === Number(cpf)
        })

        if(cpfCadastrado.length > 0) {
            res.statusCode = 401
            throw new Error("Já existe um usuário cadastrado com este CPF. Verifique se os dados inseridos estão corretos.")
        }

        // CASO DE SUCESSO
        const novaConta: ContaUsuario = {
            nome: String(nome),
            cpf: Number(cpf),
            dataNascimento: String(dataNascimento),
            saldo: 0,
            extratos: []
        }

        contas.push(novaConta)

        res.status(201).send({contas: contas})
    } catch (error: any) {
        res.send({ message: error.message })  
    }
})

// ENDPOINT PEGAR SALDO DO USUÁRIO
app.get("/users/balance", (req, res) => {
    try {
        const { nome, cpf } = req.body

        // VERIFICAÇÃO DAS INFORMAÇÕES
        if(!nome || !cpf){
            res.statusCode = 422
            throw new Error("Todas as informações são obrigatórias.")
        }

        const indiceConta = contas.findIndex(conta => {
            return conta.nome === String(nome) && conta.cpf === Number(cpf)
        })

        // VERIFICAÇÃO USUÁRIO
        if(indiceConta === null || indiceConta === undefined || indiceConta < 0) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado. Verifique se os dados inseridos estão corretos.")
        }

        // CASO DE SUCESSO
        res.status(200).send({saldo: contas[indiceConta].saldo})   
    } catch (error: any) {
        res.send({ message: error.message })  
    }
})

// ENDPOINT ADICIONAR SALDO
app.put("/users/balance", (req, res) => {
    try {
        const { nome, cpf, valor } = req.body

        // VERIFICAÇÕES DAS INFORMAÇÕES
        if(!nome || !cpf || !valor){
            res.statusCode = 422
            throw new Error("Todas as informações são obrigatórias.")
        }
        if(typeof nome !== "string"){ 
            res.statusCode = 422
            throw new Error("O nome deve ser uma string.")
        }
        if(isNaN(cpf) || isNaN(valor)){
            res.statusCode = 422
            throw new Error("O CPF e o valor do depósito devem ser números.")
        }
        if(valor <= 0){
            res.statusCode = 422
            throw new Error("O valor do depósito deve ser maior do que 0(zero).")
        }

        const indiceConta = contas.findIndex(conta => {
            return conta.nome === String(nome) && conta.cpf === Number(cpf)
        })

        // VERIFICAÇÃO USUÁRIO
        if(indiceConta === null || indiceConta === undefined || indiceConta < 0) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado. Verifique se os dados inseridos estão corretos.")
        }

        // CASO DE SUCESSO
        contas[indiceConta].saldo += Number(valor)

        res.send({conta: contas[indiceConta]})
    } catch (error: any) {
        res.send({ message: error.message })  
    }
})

// ENDPOINT PAGAR CONTA
// pagar uma conta passando: um valor, uma descrição e uma data de pagamento
// (.........)
app.put("/users/payment", (req, res) => {
    
})

// ENDPOINT TRANSFERÊNCIA INTERNA
// o usuário deve informar o seu nome, o seu CPF, o nome do destinatário, o CPF do destinatário e o valor em si
// Transferências não podem ser agendadas e devem respeitar o saldo do usuário remetente
// app.put("/users/transfer", (req, res) => {}) ?????? altera as duas contas(saldos)


// SERVIDOR
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo
       console.log(`Servidor funcionando em http://localhost:${address.port}`)
    } else {
       console.error(`Erro ao iniciar o servidor.`)
    }
})