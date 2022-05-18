// Exercícios de interpretação de código
/* 1.
    O código acrescenta um valor "i" à variável "valor" com cada repetição. Essa repetição se dá em função da
    variável "i", e é iniciada quando i=0, continuando com incremento de 1 em seu valor enquanto i<5(até que
    i>=5). Assim, o código soma "i" a "valor" 5 vezes, cada uma com um valor diferente de "i". O novo valor
    que é impresso no final corresponde ao número guardado na variável após todas as repetições: 10
*/
/* 2.
a.
    Serão impressos todos os números maiores do que 18 contidos em "lista".
b.
    Sim, é possível acessar cada elemento de um array usando a estrutura for...of... Seria preciso utilizar
    o método indexOf a cada repetição. Por exemplo, a repetição imprime os índices de cada elemento:

    for (let numero of lista) {
        console.log(numero.indexOf(numero))
    }
*/
/* 3.
    Se o usuário inserisse o valor 4, seria impressa a variável "linha" quatro vezes, uma para cada repetição.
    O que apareceria no console seria:
    *
    **
    ***
    ****
*/

// Exercícios de escrita de código
/*
// 1.
    const quantidadePets = Number(prompt("Quantos bichinhos de estimação você tem?"))

    // a.
    if(quantidadePets === 0) {
        console.log("Que pena! Você pode adotar um pet!")
    }

    // b.
    let nomesPets = []

    if(quantidadePets > 0) {
        for(let i = 0; i < quantidadePets; i++) {
            nomesPets.push(prompt("Qual o nome do seu pet?"))
        }
    }

    // c.
    console.log(nomesPets)
*/

// 2.
    // let arrayTeste = [1, 2, 3, 4]

    // a.
    function imprimeElementos(array) {
        for(elemento of array){
            console.log(elemento)
        }
    }

    // b.
    function divideElementosPor10(array) {
        for(elemento of array){
            console.log(elemento / 10)
        }
    }

    // c.
    function imprimePares(array) {
        let arrayPar = []
        for(let i = 0; i < array.length; i++){
            if(array[i] % 2 === 0){
                arrayPar.push(array[i])
            }
        }
        console.log(arrayPar)
    }

    // d.
    function imprimeTexto(array) {
        let arrayStrings = []
        for(let i = 0; i < array.length; i++){
            arrayStrings.push(`O elemento do índex ${i} é: ${array[i]}`)
        }
        console.log(arrayStrings)
    }

    // e.
    function imprimeMaiorEMenor(array) {
        let maximo = 0
        for(let i = 0; i < array.length; i++) {
            if(array[i] > maximo){
                maximo = array[i]
            }
        }
        let minimo = maximo
        for(let i = 0; i < array.length; i++) {
            if(array[i] < minimo){
                minimo = array[i]
            }
        }
        console.log(`O maior valor é ${maximo}, e o menor valor é ${minimo}.`)
    }

// Desafios
/*
// 1.
    const numeroEscolhido = Number(prompt("Escolha um número pra começar a jogar."))
    let repeticoes = 0

    if(!isNaN(numeroEscolhido)) {
        console.log("Vamos jogar!")
        let numeroChutado = Number(prompt("Hora de chutar! Qual foi o número escolhido?"))
        for(repeticoes = 0; numeroChutado !== numeroEscolhido; repeticoes ++) {
            if(numeroChutado > numeroEscolhido) {
                console.log(`Número chutado: ${numeroChutado}`)
                console.log("Errou! O número é menor.")
                numeroChutado = Number(prompt("Tente outra vez!"))
            } else {
                console.log(`Número chutado: ${numeroChutado}`)
                console.log("Errou! O número é maior.")
                numeroChutado = Number(prompt("Tente outra vez!"))
            }
        }
        if(numeroChutado === numeroEscolhido) {
            console.log(`Parabains, você acertou!!!
Número escolhido: ${numeroEscolhido}
Total de tentativas: ${repeticoes + 1}`)
        }
    }
    else {
        console.log("Algo deu errado... É para digitar um número!")
    }
*/

// 2.
const numeroEscolhido = Math.floor((Math.random() * 100) + 1);  //Sortear o número
let repeticoes = 0

// Verificação de Number
// if(!isNaN(numeroEscolhido)) {  

console.log("Vamos jogar!")
let numeroChutado = Number(prompt("Hora de chutar! Qual foi o número escolhido?"))
for(repeticoes = 0; numeroChutado !== numeroEscolhido; repeticoes ++) {
    if(numeroChutado > numeroEscolhido) {
        console.log(`Número chutado: ${numeroChutado}`)
        console.log("Errou! O número é menor.")
        numeroChutado = Number(prompt("Tente outra vez!"))
    } else {
        console.log(`Número chutado: ${numeroChutado}`)
        console.log("Errou! O número é maior.")
        numeroChutado = Number(prompt("Tente outra vez!"))
    }
}
if(numeroChutado === numeroEscolhido) {
    console.log(`Parabains, você acertou!!!
Número escolhido: ${numeroEscolhido}
Total de tentativas: ${repeticoes + 1}`)
}

// Verificação de Number
// }   
// else {
//     console.log("Algo deu errado... É para digitar um número!")
// }

// Foi suficiente trocar o valor atribuído a numeroEscolhido por um valor gerado aleatoriamente
// e retirar do código a verificação de Number, uma vez que Math sempre retorna um número
