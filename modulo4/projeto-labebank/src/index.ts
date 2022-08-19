import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { ContaUsuario } from "./data"

const app = express()
app.use(express.json())
app.use(cors())

// ENDPOINT CRIAR CONTA DE USUÁRIO
app.post("/account", (req, res) => {
    // nome, CPF e data de nascimento >>receber do body
    // saldo do usuário  >> 0
    // gastos do usuário num array de extrato (possuindo o valor, a data e uma descrição) >>vazio

    const novaConta: ContaUsuario = {
        nome: "recebe do body",
        cpf: 1, //recebe do body
        dataNascimento: "recebe do body",
        saldo: 0,
        extratos: []
    }
    
    // Não podem existir dois usuários diferentes com o mesmo CPF
    // filter  user.cpf  ===  cpf do body
    // se o array retornado não for vazio, dá erro
})

// ENDPOINT PEGAR SALDO DO USUÁRIO
// verificar o saldo da sua conta, passando: o seu nome e o seu CPF
// app.get()

// ENDPOINT ADICIONAR SALDO
// adicionar saldo à sua conta, passando: seu nome, o CPF e o valor que desejar
// app.put()

// ENDPOINT PAGAR CONTA
// pagar uma conta passando: um valor, uma descrição e uma data de pagamento
// (.........)
// app.put()

// ENDPOINT TRANSFERÊNCIA INTERNA
// o usuário deve informar o seu nome, o seu CPF, o nome do destinatário, o CPF do destinatário e o valor em si
// Transferências não podem ser agendadas e devem respeitar o saldo do usuário remetente
// app.put ?????? altera as duas contas(saldos)


// SERVIDOR
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo
       console.log(`Servidor funcionando em http://localhost:${address.port}`)
    } else {
       console.error(`Erro ao iniciar o servidor.`)
    }
})