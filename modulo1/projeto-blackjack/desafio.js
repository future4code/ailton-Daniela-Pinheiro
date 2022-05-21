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

   // 9.
   // 10.
   // 11.
   // 12.
} else {
   alert("O jogo acabou.")
}