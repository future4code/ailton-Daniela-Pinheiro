// Exercícios de interpretação de código
/* 1.
filme.elenco[0]: Imprime "Matheus Nachtergaele".
filme.elenco[filme.elenco.length - 1]: Imprime "Virginia Cavendish".
filme.transmissoesHoje[2]: Imprime "Globo" e "14h".
*/

/* 2.
a.
    cachorro: Imprime "Juca", 3, "SRD".
    gato: Imprime "Juba", 3, "SRD".
    tartaruga: Imprime "Jubo", 3, "SRD".

b.
    Os três ponto clonam as propriedades do objeto especificado para dentro do novo objeto,
    permitindo que seus valores sejam alterados.
*/

/* 3.
a.
    minhaFuncao(pessoa, "backender"): Imprime false.
    minhaFuncao(pessoa, "altura"): Imprime undefined/indefinido.

b.
    A função retorna o valor da propriedade do objeto que foi dada em seus argumentos,
    no caso de "backender", retornará o valor dessa propriedade dentro de "pessoa", que é false.
    Já no caso de "altura", não é possível retornar nenhum valor, pois essa propriedade não existe no objeto.
*/

// Exercícios de escrita de código

/*
// 1.
// a.
const pessoa = {
    nome: "Daniela",
    apelidos: ["Dan", "Dani", "Esquilo"]
}
function imprimeApelidos(objeto) {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}.`)
}

imprimeApelidos(pessoa)

// b.
const pessoaApelidos = {
    ...pessoa,
    apelidos: ["Dandan", "Deni", "Danacaxi"]
}

imprimeApelidos(pessoaApelidos)
*/

/*
// 2.
// a.
const pessoa1 = {
    nome: "Selma",
    idade: 50,
    profissao: "Professora"
}

const pessoa2 = {
    nome: "Matheus",
    idade: 32,
    profissao: "Músico"
}

// b.
function retornaValores(objeto) {
    return [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
}

console.log(retornaValores(pessoa1))
console.log(retornaValores(pessoa2))
*/

// 3.
// a.
let carrinho = []

// b.
const fruta1 = {
    nome: "Banana",
    disponibilidade: true
}
const fruta2 = {
    nome: "Abacate",
    disponibilidade: true
}
const fruta3 = {
    nome: "Limão",
    disponibilidade: true
}

// c.
function colocaNoCarrinho(fruta) {
    return carrinho.push(fruta)
}

colocaNoCarrinho(fruta1)
colocaNoCarrinho(fruta2)
colocaNoCarrinho(fruta3)

// d.
console.log(carrinho)

// Desafios
// 1.
// function perguntaUsuario() {
//     const usuario = {
//         nome: prompt("Qual é o seu nome?"),
//         idade: prompt("Qual é a sua idade?"),
//         profissao: prompt("Qual é a sua profissão?")
//     }
//     console.log(usuario, typeof(usuario))
// }
// perguntaUsuario()

// 2.
// function comparaFilmes(filme1, filme2) {
//     console.log(`O primeiro filme foi lançado antes do segundo? ${filme1.ano < filme2.ano}
// O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.ano === filme2.ano}`)
// }

// const filmeA = {
//     nome: "Attack the block",
//     ano: 2011
// }
// const filmeB = {
//     nome: "Where is the friend's house",
//     ano: 1987
// }
// comparaFilmes(filmeA, filmeB)

// 3.
// function controlaEstoque(fruta) {
//     fruta["disponibilidade"] = !fruta.disponibilidade
//     return fruta
// }
// console.log(controlaEstoque(fruta1))