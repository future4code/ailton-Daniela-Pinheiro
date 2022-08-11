// EXERCICIO 1
// a)
let minhaString: string
minhaString ="lorem ipsum"
// minhaString = 10  --> Não permite

// b)
let meuNumero: number
meuNumero = 10
// Para aceitar mais de um tipo de valor
let meuNumeroString: number | string
meuNumeroString = 20
meuNumeroString = "vinte"

// c)
const pessoa: { nome: string, idade: number, corFavorita: string } = {
    nome: "Fulano",
    idade: 30,
    corFavorita: "Verde"
}
// usando o tipo Pessoa
type Pessoa = { nome: string, idade: number, corFavorita: string }
const pessoa1: Pessoa = {
    nome: "Beltrano",
    idade: 40,
    corFavorita: "Vermelho"
}

// d)
enum CorFavorita {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}
type Pessoa2 = { nome: string, idade: number, corFavorita: CorFavorita }
const pessoa2: Pessoa2 = {
    nome: "Sicrano",
    idade: 54,
    corFavorita: CorFavorita.ANIL
}

console.table(pessoa1)
console.table(pessoa2)