// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura,largura) {
  altura = Number(prompt("Insira a altura do retângulo."))
  largura = Number(prompt("Insira a largura do retângulo."))

  return console.log(altura * largura)

}

// EXERCÍCIO 02
function imprimeIdade(anoAtual,anoNascimento) {
  anoAtual = Number(prompt("Insira o ano atual."))
  anoNascimento = Number(prompt("Insira o ano em que nasceu."))

  return console.log(anoAtual - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura ** 2)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome,idade,email) {
  nome = prompt("Qual é o seu nome?")
  idade = prompt("Quantos anos você tem?")
  email = prompt("Qual é o seu e-mail?")

  return console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1,cor2,cor3) {
  cor1 = prompt("Digite sua primeira cor favorita.")
  cor2 = prompt("Digite sua segunda cor favorita.")
  cor3 = prompt("Digite sua terceira cor favorita.")

  const tresCores = [cor1, cor2, cor3]

  return console.log(tresCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // valorIngresso * N = custo
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const elementoTrocado = array[array.length - 1]
  array[array.length - 1] = array[0]
  array[0] = elementoTrocado

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG(anoAtual, anoNascimento, anoEmissaoIdentidade) {
  anoAtual = Number(prompt("Digite o ano atual."))
  anoNascimento = Number(prompt("Digite o seu ano de nascimento."))
  anoEmissaoIdentidade = Number(prompt("Digite o ano de emissão de sua carteira de identidade."))
  const idade = anoAtual - anoNascimento
  const idadeIdentidade = anoAtual - anoEmissaoIdentidade
  
  const caso1 = idade <= 20 && idadeIdentidade >= 5
  const caso2 = ((idade > 20) && (idade <= 50)) && idadeIdentidade >= 10
  const caso3 = idade > 50 && idadeIdentidade >=15
  
  return console.log(caso1 || caso2 || caso3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const multiploDe400 = ano % 400 === 0
  const multiploDe4 = ano % 4 === 0
  const excecao = ano % 100 === 0 && !multiploDe400

  return multiploDe400 || (multiploDe4 && !excecao)

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu(pergunta1, pergunta2, pergunta3) {
  pergunta1 = prompt("Você tem mais de 18 anos?")
  pergunta2 = prompt("Você possui ensino médio completo?")
  pergunta3 = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  return console.log((pergunta1 === "sim") && (pergunta2 === "sim") && (pergunta3 === "sim"))

}