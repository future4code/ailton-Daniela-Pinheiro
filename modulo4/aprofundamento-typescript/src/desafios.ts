// EXERCICIO 6
type Consultas = { nome: string, idade: number, dataDaConsulta: string }[]

function ordenaConsultas(lista: Consultas): Consultas {
    const listaOrdenada: Consultas = lista.sort(
        (a, b) => a.nome > b.nome ? 1 : -1
    )
    return listaOrdenada
}

// console.log(ordenaConsultas([
//     { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
//     { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
//     { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
//     { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
// ]))


// EXERCICIO 7


// EXERCICIO 8 
enum Classificacao {
    VERAO = "Verão",
    INVERNO = "Inverno",
    BANHO = "Banho",
    INTIMA = "Íntima"
}
type Produtos = { nome: string, preco: number, classificacao: Classificacao }[]
type ProdutosDesconto = { nome: string, preco: number, classificacao: Classificacao, precoDesconto: number }[]

function retornaProdutosComDesconto(lista: Produtos): ProdutosDesconto {
    const novaLista: ProdutosDesconto = lista.map(produto => {
        let desconto: number
        if(produto.classificacao === "Verão") {
            desconto = 5
        } else if(produto.classificacao === "Inverno") {
            desconto = 10
        } else if(produto.classificacao === "Banho") {
            desconto = 4
        } else {
            desconto = 7
        }

        const precoDesconto: number = lista[0].preco * (100 - desconto) / 100

        return {
            nome: produto.nome,
            preco: produto.preco,
            classificacao: produto.classificacao,
            precoDesconto: precoDesconto
        }
    })

    return novaLista
}

// const listaProdutos = [
//     {nome: "Camiseta", preco: 30, classificacao: Classificacao.VERAO},
//     {nome: "Jaqueta", preco: 100, classificacao: Classificacao.INVERNO}
// ]
// console.table(retornaProdutosComDesconto(listaProdutos))


// EXERCICIO 9