/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// Funções
function novaCarta(cartas) {
   let novaCarta = comprarCarta()
   cartas.push(novaCarta)
}
function calculaPontuacao(cartas) {
   let soma = 0
   for(let i = 0; i < cartas.length; i++) {
      soma += cartas[i].valor
   }
   return soma
}
function retornaCartasReveladas(cartas) {
   let cartasReveladas = []
   for(let i = 0; i < cartas.length; i++) {
      cartasReveladas.push(cartas[i].texto)
   }
   return cartasReveladas.join(" ")
}

// Variaveis
let pontuacaoUsuario = 0
let pontuacaoComputador = 0

// Iniciando uma nova rodada
if(confirm("Boas vindas ao jogo de BlackJack!" +
   "\n" +
   "Quer iniciar uma nova rodada?")) {
   // Sorteia duas cartas para cada jogador
   let cartasUsuario = [comprarCarta(), comprarCarta()]
   let cartasComputador = [comprarCarta(), comprarCarta()]

   // Se forem dois ases, sorteia novamente
   if((cartasUsuario[0].texto.includes("A") && cartasUsuario[1].texto.includes("A")) || (cartasComputador[0].texto.includes("A") && cartasComputador[1].texto.includes("A"))) {
      cartasUsuario = [comprarCarta(), comprarCarta()]
      cartasComputador = [comprarCarta(), comprarCarta()]
   }

   // Vez do Usuário:
   // Pode escolher comprar mais cartas
   if(confirm(
   `Suas cartas são ${retornaCartasReveladas(cartasUsuario)}. A carta revelada do computador é ${cartasComputador[0].texto}.` +
   "\n" +  
   "Deseja comprar mais uma carta?")) {
      // Compra mais uma carta
      novaCarta(cartasUsuario)
      // Faz a pontuação
      pontuacaoUsuario = calculaPontuacao(cartasUsuario)

      // Se a pontuação for menor de 21 pode comprar novamente
      if(pontuacaoUsuario < 21) {
         if(confirm(
         `Suas cartas são ${retornaCartasReveladas(cartasUsuario)}. A carta revelada do computador é ${cartasComputador[0].texto}.` +
         "\n" +  
         "Deseja comprar mais uma carta?")) {
            // Compra mais uma carta
            novaCarta(cartasUsuario)
            // Faz a pontuação
            pontuacaoUsuario = calculaPontuacao(cartasUsuario)
         } else {
            // Faz a pontuação
            pontuacaoUsuario = calculaPontuacao(cartasUsuario)
            // Fim da vez do Usuário
         }
      } else if(pontuacaoUsuario > 21) {
         // Faz a pontuação
         pontuacaoUsuario = calculaPontuacao(cartasUsuario)
         pontuacaoComputador = calculaPontuacao(cartasComputador)
         // Mensagem de derrota: quando a pontuação for maior de 21
         alert(
         `Suas cartas são ${retornaCartasReveladas(cartasUsuario)}. Sua pontuação é ${pontuacaoUsuario}.` +
         "\n" + 
         `As cartas do computador são ${retornaCartasReveladas(cartasComputador)}. A pontuação do computador é ${pontuacaoComputador}.` +
         "\n" +
         "O computador ganhou!")
      }      
   } else {
      // Não quer comprar cartas
      // Faz a pontuação
      pontuacaoUsuario = calculaPontuacao(cartasUsuario)
      // Fim da vez do Usuário
   }

   // Vez do Computador:
   // Enquanto a pontuação for menor ou igual à do Usuário
   pontuacaoComputador = calculaPontuacao(cartasComputador)
   while((pontuacaoComputador <= pontuacaoUsuario) && (pontuacaoUsuario <= 21)) {
      // Compra mais uma carta
      novaCarta(cartasComputador)
      // Faz a pontuação
      pontuacaoComputador = calculaPontuacao(cartasComputador)
   }

   // Se a pontuação for maior do que 21
   if(pontuacaoComputador > 21) {
      alert(
      `Suas cartas são ${retornaCartasReveladas(cartasUsuario)}. Sua pontuação é ${pontuacaoUsuario}.` +
      "\n" + 
      `As cartas do computador são ${retornaCartasReveladas(cartasComputador)}. A pontuação do computador é ${pontuacaoComputador}.` +
      "\n" +
      "O usuário ganhou!")
   } else {
      // Fim da vez do Computador
      // Imprime os resultados
      if((pontuacaoComputador > pontuacaoUsuario) && (pontuacaoComputador <= 21)) {
         alert(`Suas cartas são ${retornaCartasReveladas(cartasUsuario)}. Sua pontuação é ${pontuacaoUsuario}.` +
         "\n" + 
         `As cartas do computador são ${retornaCartasReveladas(cartasComputador)}. A pontuação do computador é ${pontuacaoComputador}.` +
         "\n" +
         "O computador ganhou!")
      } else if ((pontuacaoUsuario > pontuacaoComputador) && (pontuacaoUsuario <= 21)) {
         alert(`Suas cartas são ${retornaCartasReveladas(cartasUsuario)}. Sua pontuação é ${pontuacaoUsuario}.` +
         "\n" + 
         `As cartas do computador são ${retornaCartasReveladas(cartasComputador)}. A pontuação do computador é ${pontuacaoComputador}.` +
         "\n" +
         "O usuário ganhou!")
      } else if (pontuacaoUsuario === pontuacaoComputador) {
         alert(`Suas cartas são ${retornaCartasReveladas(cartasUsuario)}. Sua pontuação é ${pontuacaoUsuario}.` +
         "\n" + 
         `As cartas do computador são ${retornaCartasReveladas(cartasComputador)}. A pontuação do computador é ${pontuacaoComputador}.` +
         "\n" +
         "Empate!")
      }
   }
} else {
   alert("O jogo acabou.")
}