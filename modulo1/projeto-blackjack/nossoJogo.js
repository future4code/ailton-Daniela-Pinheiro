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


// Mensagem de boas vindas
console.log("Boas vindas ao jogo de Blackjack!")

// Iniciando uma nova rodada
if(confirm("Quer iniciar uma nova rodada?")) {
   // Sorteia duas cartas para cada jogador
   const cartaUsuario1 = comprarCarta()
   const cartaUsuario2 = comprarCarta()
   const cartaComputador1 = comprarCarta()
   const cartaComputador2 = comprarCarta()

   // Calcula e imprime as pontuaçoes
   const pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor
   const pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor
   console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto}  - pontuação ${pontuacaoUsuario}
Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${pontuacaoComputador}`)

   // Compara as pontuaçoes e anuncia o vencedor ou o empate
   if(pontuacaoComputador === pontuacaoUsuario) {
      console.log("Empate!")
   } else if(pontuacaoComputador < pontuacaoUsuario) {
      console.log("O usuário ganhou!")
   } else {
      console.log("O computador ganhou!")
   }
} else {
   console.log("O jogo acabou.")
}