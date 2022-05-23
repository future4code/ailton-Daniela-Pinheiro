// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
    //   Desafio
    //   let arrayInvertido = []
    //   for(let i = 0; i < array.length; i++) {
    //       arrayInvertido.unshift(array[i])
    //   }
    //   return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((num1, num2) => {
        return num1 - num2
    })
  //   Desafio
    // for(let i = 0; i < array.length; i++) {
    //     for(let j = 0; j < array.length; j++) {
    //         if(array[i] < array[j]) {
    //             let troca = array[i]
    //             array[i] = array[j]
    //             array[j] = troca
    //         }
    //     }
    // }
    // return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter((numero, indice, array) => {
        if(array[indice] % 2 === 0) {
            return array[indice]
        }
    })
  //   Desafio
  //   let numerosPares = []
  //   for(let numero of array) {
  //       if(numero % 2 === 0) {
  //           numerosPares.push(numero)
  //       }
  //   }
  //   return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.filter((numero, indice, array) => {
        if(array[indice] % 2 === 0) {
            return array[indice]
        }
    }).map((numero, indice, array) => {
        return array[indice] ** 2
    })
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}