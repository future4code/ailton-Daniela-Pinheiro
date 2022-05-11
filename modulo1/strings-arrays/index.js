// Exercícios de interpretação de código

/*
1.
    a. undefined, pois não foi atribuído valor algum à variável let
    b. null
    c. 11
    d. 3
    e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
    f. 9
*/

/*
2.
    Será impresso no console: SUBI NUM ÔNIBUS EM MIRROCOS 27
*/

// Exercícios de escrita de código

/*
// 1.
    const nomeUsuario = prompt("Insira seu nome.")
    const emailUsuario = prompt("Insira seu e-mail.")

    console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}!`)
*/

/*
// 2.
    let comidasPreferidas = ["açaí", "pão de queijo", "mochi", "yakissoba", "omelete"]

    console.log(comidasPreferidas)

    console.log(`Essas são as minhas comidas preferidas:
    ${comidasPreferidas[0]};
    ${comidasPreferidas[1]};
    ${comidasPreferidas[2]};
    ${comidasPreferidas[3]};
    ${comidasPreferidas[4]}.`)

    const comidaPreferidaUsuario = prompt("Qual é a sua comida preferida?")
    comidasPreferidas[1] = comidaPreferidaUsuario
    console.log(comidasPreferidas)
*/

// 3.
    let listaDeTarefas = []

    listaDeTarefas.push(prompt("Insira uma primeira tarefa a ser realizada hoje."))
    listaDeTarefas.push(prompt("Insira uma segunda tarefa a ser realizada hoje."))
    listaDeTarefas.push(prompt("Insira uma terceira tarefa a ser realizada hoje."))

    console.log(listaDeTarefas)

    listaDeTarefas.splice(prompt("Insira o índice da tarefa já realizada."),1)

    console.log(listaDeTarefas)

// Desafios
/*
// 1.
    let fraseInserida = prompt("Digite uma frase.")
    let palavrasDaFrase = fraseInserida.split(" ")
    console.log(palavrasDaFrase)
*/

/*
// 2.
    let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
    console.log(frutas.indexOf("Abacaxi"), frutas.length)
*/