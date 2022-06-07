```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let numeroDeVezes = 0
  for(let numero of arrayDeNumeros) {
    if(numero === numeroEscolhido) {
      numeroDeVezes += 1
    }
  }
  if(numeroDeVezes !== 0) {
    return `O número ${numeroEscolhido} aparece ${numeroDeVezes}x`
  } else {
    return "Número não encontrado"
  }
}
```