// Exercícios de interpretação de código
/*
1.
    a. false
    b. false
    c. true
    d. boolean

2.
    O comando prompt sempre retorna uma string, logo, o operador de soma irá apenas
    juntar as duas variáveis, sem somar seus valores.

3.
    Para fazer a soma aritmética, é necessário converter as strings em numbers, utilizando Number():
    let primeiroNumero = Number(prompt("Digite um numero!"))
    let segundoNumero = Number(prompt("Digite outro numero!"))
*/

// Exercícios de escrita de código

/*
// 1.
    const idadeUsuario = Number(prompt("Qual é a sua idade?"))
    const idadeMelhorAmigo = Number(prompt("Qual é a idade de seu(a) melhor amigo(a)?"))
    const idadeMaior = idadeUsuario > idadeMelhorAmigo
    const diferencaIdade = idadeUsuario - idadeMelhorAmigo

    console.log("Sua idade é maior do que a do seu melhor amigo?", idadeMaior)
    console.log(diferencaIdade)
*/

/*
// 2.
    const numeroPar = Number(prompt("Insira um número par."))
    const divisaoPor2 = numeroPar % 2

    console.log(divisaoPor2)

    // Os números pares sempre retornam valor 0
    // Os números ímpares, retornam 1
*/

/*
// 3.
    const idadeEmAnos = Number(prompt("Quantos anos você tem?"))
    const idadeEmMeses = idadeEmAnos * 12
    const idadeEmDias = (idadeEmAnos * 365) + (idadeEmAnos / 4) //o valor somado corresponde aos anos bissextos
    const idadeEmHoras = idadeEmDias * 24

    console.log("Idade em meses:", idadeEmMeses)
    console.log("Idade em dias:", idadeEmDias)
    console.log("Idade em horas:", idadeEmHoras)
*/

4.
    const numero1 = Number(prompt("Insira um número."))
    const numero2 = Number(prompt("Insira outro número."))

    console.log("O primeiro numero é maior que segundo?", numero1 > numero2)
    console.log("O primeiro numero é igual ao segundo?", numero1 === numero2)
    console.log("O primeiro numero é divisível pelo segundo?", numero1 % numero2 === 0)
    console.log("O segundo numero é divisível pelo primeiro?", numero2 % numero1 === 0)

// Desafio

/*
// 1.
    const grausFahrenheit = 77
    const fahrenheitParaKelvin = (grausFahrenheit - 32) * (5 / 9) + 273.15
    let grausCelsius = 80
    let celsiusParaFahrenheit = grausCelsius * (9 / 5) + 32

    console.log(`${grausFahrenheit}ºF é igual a ${fahrenheitParaKelvin}K`) //77ºF -> K
    console.log(`${grausCelsius}ºC é igual a ${celsiusParaFahrenheit}ºF`) //80ºC -> F

    grausCelsius = 30
    celsiusParaFahrenheit = grausCelsius * (9 / 5) + 32
    let celsiusParaKelvin = grausCelsius + 273.15
    console.log(`${grausCelsius}ºC é igual a ${celsiusParaFahrenheit}ºF e ${celsiusParaKelvin}K`) //30ºC -> F e K

    grausCelsius = Number(prompt("Insira o valor a ser convertido."))
    celsiusParaFahrenheit = grausCelsius * (9 / 5) + 32
    celsiusParaKelvin = grausCelsius + 273.15
    console.log(`${grausCelsius}ºC é igual a ${celsiusParaFahrenheit}ºF e ${celsiusParaKelvin}K`) //ºC > F e K
*/

// 2.

// 3.

