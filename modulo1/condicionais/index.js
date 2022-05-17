// Exercícios de interpretação de código
/* 1.
    a.
    O código recebe do usuário um número, o transforma em uma variável do tipo number,
    e depois testa se o resto da divisão desse número por 2 é igual a 0. Se sim, imprime a
    mensagem: "Passou no teste." Se não, por qualquer motivo, imprime: "Não passou no teste."

    b.
    Para números pares(divisíveis por 2).

    c.
    Para números ímpares.
*/
/* 2.
    a.
    O código serve para encontrar o preço de uma fruta. Ele recebe do usuário o nome de uma fruta,
    e retorna o preço dessa fruta.

    b.
    "O preço da fruta Maçã é R$ 2.25"

    c.
    "O preço da fruta Pêra é R$ 5.5"
*/
/* 3.
    a.
    A primeira linha pede para que o usuário digite um número, transforma esse número numa variável tipo number
    e atribui esse valor à variável const "numero" que está sendo declarada.

    b.
    Como 10 é maior do que 0, a condição será verdadeira, e será impresso "Esse número passou no teste".
    Além disso, "Essa mensagem é secreta!!!" será atribuído à variável "mensagem".
    No caso de -10, a condição seria falsa, então nada dentro do bloco "if" seria executado.

    c.
    console.log(mensagem) retornará um erro, pois a variável "mensagem" faz parte do escopo da função "if"
    e não pode ser acessado diretamente fora desse bloco.
*/

// Exercícios de escrita de código
/*
// 1.
    const idadeUsuario = Number(prompt("Quantos anos você tem?"))

    if (idadeUsuario >= 18) {
        console.log("Você pode dirigir")
    } else {
        console.log("Você não pode dirigir.")
    }
*/
/*
// 2.
    const turnoAluno = prompt("Em qual turno você estuda? Digite M para matutino, V para vespertino ou N para noturno.")

    if (turnoAluno === "M") {
        console.log("Bom Dia!")
    } else if (turnoAluno === "V") {
        console.log("Boa Tarde!")
    } else if (turnoAluno === "N") {
        console.log("Boa Noite!")
    } else {
        console.log("Houve algum erro, verifique se digitou corretamente.")
    }
*/
/*
// 3.
    const turnoAluno = prompt("Em qual turno você estuda? Digite M para matutino, V para vespertino ou N para noturno.")

    switch (turnoAluno) {
        case "M":
            console.log("Bom Dia!")
            break
        case "V":
            console.log("Boa Tarde!")
            break
        case "N":
            console.log("Boa Noite!")
            break
        default:
            console.log("Houve algum erro, verifique se digitou corretamente.")
            break
    }
*/

// 4.
    const generoFilme = prompt("Qual é o gênero do filme que pretende assistir?")
    const precoIngresso = Number(prompt("Quantos reais custa o ingresso?"))

    if ((generoFilme.toLowerCase() === "fantasia") && (precoIngresso < 15)){
        console.log("Bom filme!") 
    } else {
        console.log("Escolha outro filme :(")
    }


// Desafios
/*
// 1.
    const generoFilme = prompt("Qual é o gênero do filme que pretende assistir?")
    const precoIngresso = Number(prompt("Quantos reais custa o ingresso?"))

    if ((generoFilme.toLowerCase() === "fantasia") && (precoIngresso < 15)){
        const lanchinho = prompt("Qual snack você vai comprar?")
        console.log(`Bom filme! Aproveite o seu ${lanchinho}!`) 
    } else {
        console.log("Escolha outro filme :(")
    }
*/
/*
// 2.
// Dados pedidos ao usuário:
const dadosUsuario = {
    nome_completo: prompt("Digite seu nome completo"),
    tipo_jogo: prompt("Qual é o tipo de jogo? Digite IN para internacional ou DO para doméstico."),
    etapa_jogo: prompt("Qual é a etapa do jogo? Digite SF para semi-final, DT para decisão de terceiro lugar ou FI para final."),
    categoria: Number(prompt("Qual é a categoria? Digite números de 1 a 4.")),
    quantidade_ingressos: Number(prompt("Qual é a quantidade de ingressos?"))
}

// Tabela de preços
const tabelaPrecos = {    //nacional, internacional *4.10
    semi_final: [1320.00, 880.00, 550.00, 220.00],
    terceiro_lugar: [660.00, 440.00, 330.00, 170.00],
    final: [1980.00, 1320.00, 880.00, 330.00]
}

// Cálculo do valor dos ingressos:
function verificaEtapaECategoria(usuario, preco) {
    switch (usuario.categoria){
        case 1:
            return preco[0] * usuario.quantidade_ingressos
        case 2:
            return preco[1] * usuario.quantidade_ingressos
        case 3:
            return preco[2] * usuario.quantidade_ingressos
        default:
            return preco[3] * usuario.quantidade_ingressos
    }
}

function calculaIngresso(usuario) {
    // Cálculo:
    let valorFinal
    if (usuario.etapa_jogo === "SF"){
        valorFinal = verificaEtapaECategoria(usuario, tabelaPrecos.semi_final)
    } else if (usuario.etapa_jogo === "DT") {
        valorFinal = verificaEtapaECategoria(usuario, tabelaPrecos.terceiro_lugar)
    } else {
        valorFinal = verificaEtapaECategoria(usuario, tabelaPrecos.final)
    }

    if (usuario.tipo_jogo === "IN") {
        valorFinal = valorFinal / 4.10
    } else {
        valorFinal = valorFinal
    }

    // Manipulação de alguns dados para impressão:
    switch (dadosUsuario.etapa_jogo){
        case "SF":
            dadosUsuario.etapa_jogo = "Semi-final"
            break
        case "DT":
            dadosUsuario.etapa_jogo = "Decisão de terceiro lugar"
            break
        default:
            dadosUsuario.etapa_jogo = "Final"
            break
    }
    // Impressão:
    if (usuario.tipo_jogo === "DO") {
        console.log(`
        --Dados da compra--- 
        Nome do cliente: ${usuario.nome_completo} 
        Tipo do jogo: Nacional 
        Etapa do jogo: ${usuario.etapa_jogo}
        Categoria: ${usuario.categoria}
        Quantidade de Ingressos: ${usuario.quantidade_ingressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorFinal/usuario.quantidade_ingressos} 
        Valor total:  R$ ${valorFinal}`
        )
    } else {
        console.log(`
        --Dados da compra--- 
        Nome do cliente: ${usuario.nome_completo} 
        Tipo do jogo: Internacional 
        Etapa do jogo: ${usuario.etapa_jogo}
        Categoria: ${usuario.categoria}
        Quantidade de Ingressos: ${usuario.quantidade_ingressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  U$ ${valorFinal/usuario.quantidade_ingressos} 
        Valor total:  U$ ${valorFinal}`
        )
    }
}

calculaIngresso(dadosUsuario)
*/