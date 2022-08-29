import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { contas, ContaUsuario, Transacao } from "./data"

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
            res.statusCode = 409
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
        res.send({ mensagem: error.message })  
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
        let saldoUsuario: number = contas[indiceConta].saldo
        if(contas[indiceConta].extratos.length > 0) {
            // VERIFICAÇÃO DE TRANSAÇÕES DE DATAS ANTERIORES
            const dataAtual: Date = new Date()
            const anoAtual: number = dataAtual.getFullYear()
            const mesAtual: number = dataAtual.getMonth() + 1
            const diaAtual: number = dataAtual.getDate()

            const contasPagas: Transacao[] = contas[indiceConta].extratos.filter(transacao => {
                return Number(transacao.data.split("/")[2]) <= anoAtual
            }).filter(transacao => {
                return Number(transacao.data.split("/")[0]) <= mesAtual
            }).filter(transacao => {
                return Number(transacao.data.split("/")[1]) <= diaAtual
            })

            saldoUsuario += contasPagas.reduce((total, transacao) => {
                return total + transacao.valor
            }, 0)
        }

        res.status(200).send({saldo: saldoUsuario})   
    } catch (error: any) {
        res.send({ mensagem: error.message })  
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

        res.status(202).send({conta: contas[indiceConta]})
    } catch (error: any) {
        res.send({ mensagem: error.message })  
    }
})


// ENDPOINT PAGAR CONTA
app.post("/users/payment", (req, res) => {
    try {
        const { nome, cpf, valor, data, descricao } = req.body

        // VERIFICAÇÕES DAS INFORMAÇÕES
        if(!nome || !cpf || !valor || !descricao){
            res.statusCode = 422
            throw new Error("As informações nome, CPF, valor e descrição são obrigatórias.")
        }
        if(typeof nome !== "string" || typeof data !== "string" || typeof descricao !== "string"){ 
            res.statusCode = 422
            throw new Error("As informações nome, data e descrição deve ser strings.")
        }
        if(isNaN(cpf) || isNaN(valor)){
            res.statusCode = 422
            throw new Error("O CPF e o valor devem ser números.")
        }
        if(valor <= 0){
            res.statusCode = 422
            throw new Error("O valor deve ser maior do que 0(zero).")
        }

        // VERIFICAÇÃO DE DATA DO PAGAMENTO
        const dataAtual: Date = new Date()
        const anoAtual: number = dataAtual.getFullYear()
        const mesAtual: number = dataAtual.getMonth() + 1
        const diaAtual: number = dataAtual.getDate()

        let dataDoPagamento: string = String(mesAtual) + "/" + String(diaAtual) + "/" + String(anoAtual)

        if(data) {
            const dataPagamento: Date = new Date(data)
            const anoPagamento: number = dataPagamento.getFullYear()
            const mesPagamento: number = dataPagamento.getMonth() + 1
            const diaPagamento: number = dataPagamento.getDate()
            dataDoPagamento = String(mesPagamento) + "/" + String(diaPagamento) + "/" + String(anoPagamento)

            if(anoAtual > anoPagamento) {
                res.statusCode = 422
                throw new Error("A data de um pagamento não pode ser anterior à data atual.")
            }
            if(anoAtual === anoPagamento) {
                if(mesAtual > mesPagamento){
                    res.statusCode = 422
                    throw new Error("A data de um pagamento não pode ser anterior à data atual.")
                }
                if((mesAtual === mesPagamento) && (diaAtual > diaPagamento)) {
                    res.statusCode = 422
                    throw new Error("A data de um pagamento não pode ser anterior à data atual.")
                }
            }
        }

        const indiceConta = contas.findIndex(conta => {
            return conta.nome === String(nome) && conta.cpf === Number(cpf)
        })

        // VERIFICAÇÃO USUÁRIO
        if(indiceConta === null || indiceConta === undefined || indiceConta < 0) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado. Verifique se os dados inseridos estão corretos.")
        }

        // VERIFICAÇÃO DE SALDO
        if(contas[indiceConta].saldo < Number(valor)) {
            res.statusCode = 401
            throw new Error("Não há saldo suficiente para este pagamento.")
        }

        // CASO DE SUCESSO
        const transacao: Transacao = {
            valor: - Number(valor),
            data: dataDoPagamento,
            descricao: String(descricao)
        }

        contas[indiceConta].extratos.push(transacao)

        res.status(200).send({ extrato: contas[indiceConta].extratos })
    } catch (error: any) {
        res.send({ mensagem: error.message }) 
    }

})


// ENDPOINT TRANSFERÊNCIA INTERNA
app.put("/users/transfer", (req, res) => {
    try {
        const { nomeUsuario, cpfUsuario, nomeDestinatario, cpfDestinatario, valor } = req.body

        // VERIFICAÇÕES DAS INFORMAÇÕES
        if(!nomeUsuario || !cpfUsuario || !nomeDestinatario || !cpfDestinatario || !valor){
            res.statusCode = 422
            throw new Error("Todas as informações são obrigatórias.")
        }
        if(typeof nomeUsuario !== "string" || typeof nomeDestinatario !== "string"){ 
            res.statusCode = 422
            throw new Error("As informações nome do usuário e nome do destinatário deve ser strings.")
        }
        if(isNaN(cpfUsuario) || isNaN(cpfDestinatario) || isNaN(valor)){
            res.statusCode = 422
            throw new Error("Os CPFs e o valor devem ser números.")
        }
        if(valor <= 0){
            res.statusCode = 422
            throw new Error("O valor deve ser maior do que 0(zero).")
        }

        const indiceContaUsuario = contas.findIndex(conta => {
            return conta.nome === String(nomeUsuario) && conta.cpf === Number(cpfUsuario)
        })

        const indiceContaDestinatario = contas.findIndex(conta => {
            return conta.nome === String(nomeDestinatario) && conta.cpf === Number(cpfDestinatario)
        })

        // VERIFICAÇÕES DE USUÁRIOS
        if(indiceContaUsuario === null || indiceContaUsuario === undefined || indiceContaUsuario < 0) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado. Verifique se os dados inseridos estão corretos.")
        }

        if(indiceContaDestinatario === null || indiceContaDestinatario === undefined || indiceContaDestinatario < 0) {
            res.statusCode = 404
            throw new Error("Destinatário não encontrado. Verifique se os dados inseridos estão corretos.")
        }

        // VERIFICAÇÂO DE SALDO
        if(contas[indiceContaUsuario].saldo < Number(valor)) {
            res.statusCode = 401
            throw new Error("Este usuário não possui saldo suficiente para a transferência.")
        }

        // CASO DE SUCESSO
        contas[indiceContaUsuario].saldo -= Number(valor)
        contas[indiceContaDestinatario].saldo += Number(valor)

        res.send({mensagem: "Transferência concluída!"})
    } catch (error: any) {
        res.send({ mensagem: error.message })
    }
})


// SERVIDOR
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo
       console.log(`Servidor funcionando em http://localhost:${address.port}`)
    } else {
       console.error(`Erro ao iniciar o servidor.`)
    }
})