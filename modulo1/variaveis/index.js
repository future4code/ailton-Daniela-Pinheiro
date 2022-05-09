// Exercícios de interpretação de código

/* // 1.
    let a = 10
    let b = 10
    
    console.log(b)
    // Imprimirá no console: 10

    b = 5
    console.log(a, b)
    // Imprimirá no console: 10 5
*/

/* // 2.
    let a = 10
    let b = 20
    c = a 
    // c = 10
    b = c
    // b = 10
    a = b
    // a = 10

    console.log(a, b, c)
    // Imprimirá no console: 10 10 10
*/

/* // 3.
    let p = prompt("Quantas horas você trabalha por dia?")
    // Cria uma variável p que recebe a informação de horas trabalhadas por dia em string inserida pelo usuário.
    let t = prompt("Quanto você recebe por dia?")
    // Cria uma variável t que recebe a informação de dinheiro que recebe por dia em string inseria pelo usuário.
    alert(`Voce recebe ${t/p} por hora`)
    // Imprimirá para o usuário o resultado da divisão de t por p, no meio da string.

    // Sugestão de melhorias
    //     Trocar p por horasTrabalhadas;
    //     Trocar t por dinheiroRecebido;
    //     Modificar a string do alert para imprimir "Voce recebe ${dinheiroRecebido/horasTrabalhadas} reais por hora."
*/

// Exercícios de escrita de código

/* // 1.
    // const nome
    // let idade
    // console.log(typeof nome, typeof idade)

    // Não é possível declarar uma variável const sem nenhum valor atribuído, isso retorna uma mensagem de erro.
    // No caso da variável let, não há problema para declará-la sem valor, e seu tipo é undefined.
    // Undefined representa a ausência de valor de uma variável.

    const nomeUsuario = prompt("Qual é o seu nome?")
    let idadeUsuario = prompt("Qual é a sua idade?")

    // console.log(typeof nomeUsuario, typeof idadeUsuario)
    // Esse comando imprime o tipo string para ambas as variáveis, mesmo a idade sendo um número.
    // Isso ocorre pois o retorno de prompt sempre será uma string.

    console.log(`Olá ${nomeUsuario}, você tem ${idadeUsuario} anos.`)
*/

/* // 2.
    const perguntaA = "Você gosta de chocolate?"
    const perguntaB = "Hoje está chovendo?"
    const perguntaC = "Você tem algum pet?"

    let respostaA = prompt(perguntaA)
    let respostaB = prompt(perguntaB)
    let respostaC = prompt(perguntaC)

    console.log(perguntaA, respostaA, perguntaB, respostaB, perguntaC, respostaC)
*/

/* // 3.
    let a = 10
    let b = 25

    // Se criarmos uma terceira variável c para receber o valor de a,
    // podemos então atribuir o valor de b à variável a, e o valor de c à variável b.
    let c = a
    a = b
    b = c
    
    // Depois de trocados, teremos o seguinte resultado:
    console.log("O novo valor de a é", a) // O novo valor de a é 25
    console.log("O novo valor de b é", b) // O novo valor de b é 10
*/

/* // Desafio

    let a = +prompt("Digite aqui um número.")
    let b = +prompt("Digite aqui um número.")

    // 1.
     // alert(`O primeiro número somado ao segundo número resulta em: ${a+b}.`)
    
    // 2.
        alert(`O primeiro número multiplicado pelo segundo número resulta em: ${a*b}.`)
*/








