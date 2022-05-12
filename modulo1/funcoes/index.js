// Exercícios de interpretação de código

/* 1.
    a. Será impresso primeiro o número 10, e depois o número 50.

    b. O programa retornaria os valores das multiplicações, porém sem
    que eles sejam salvos em alguma variável ou impressos.
    Logo, não apareceria nada no console.
*/

/* 2.
    a. A função recebe uma string e realiza nela os seguintes métodos: muda todas
    as letras para minúsculas, e verifica se "cenoura" existe dentro dessa string.
    No caso desse programa, a função recebe um texto inserido através do prompt e
    realiza essas ações nele, imprimindo o resultado no console.

    b. i. true
    ii. true
    iii. false
*/

// Exercícios de escrita de código

/*
// 1.
// a.
    function imprimeMinhaBio() {
        console.log("Eu sou Daniela, tenho 28 anos, moro em São Paulo e sou estudante.")
    }

    imprimeMinhaBio()

// b.
    const nomeUsuario = prompt("Qual é o seu nome?")
    const idadeUsuario = Number(prompt("Quantos anos você tem?"))
    const cidadeUsuario = prompt("Em qual cidade você mora?")
    const profissaoUsuario = prompt("Qual é a sua profissão?")

    function criaBioUsuario(nome, idade, cidade, profissao) {
        return (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
    }

    console.log(criaBioUsuario(nomeUsuario,idadeUsuario,cidadeUsuario,profissaoUsuario))
*/

/*
// 2.
// a.
    function soma(numero1,numero2) {
        return numero1 + numero2
    }

    console.log(soma(2,4))

// b.
    function verificaMaiorOuIgual(numero1,numero2) {
        return numero1 >= numero2
    }

    console.log(verificaMaiorOuIgual(2,4), verificaMaiorOuIgual(4,2))

// c.
    function verificaPar(numero) {
        return numero % 2 === 0
    }

    console.log(verificaPar(2), verificaPar(1))

// d.
    function imprimaMensagem(mensagem) {
        console.log(mensagem.length, mensagem.toUpperCase())
    }

    imprimaMensagem("Hoje é quinta-feira.")
*/

// 3.
    const numeroUsuario1 = Number(prompt("Insira um número."))
    const numeroUsuario2 = Number(prompt("Insira outro número."))

    let soma = (numero1, numero2) => numero1 + numero2
    let subtracao = (numero1, numero2) => numero1 - numero2
    let multiplicacao = (numero1, numero2) => numero1 * numero2
    let divisao = (numero1, numero2) => numero1 / numero2

    console.log(`Números inseridos: ${numeroUsuario1} e ${numeroUsuario2}
    Soma: ${soma(numeroUsuario1,numeroUsuario2)}
    Diferença: ${subtracao(numeroUsuario1,numeroUsuario2)}
    Multiplicação: ${multiplicacao(numeroUsuario1,numeroUsuario2)}
    Divisão: ${divisao(numeroUsuario1,numeroUsuario2)}`)

  
// Desafios
/*
// 1.
    let imprime = (mensagem) => console.log(mensagem)
    let soma = (numero1,numero2) => numero1 + numero2

    imprime(soma(1,2))
*/

/*
// 2.
    function calculeHipotenusa(cateto1,cateto2) {
        return ((cateto1 ** 2) + (cateto2 ** 2)) ** 0.5
    }

    console.log(calculeHipotenusa(9,12)) //triângulo 9-12-15
*/