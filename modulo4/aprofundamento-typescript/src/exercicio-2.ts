// EXERCICIO 2
// a, b)
function obterEstatisticas(numeros: number[]): {
    maior: number,
    menor: number,
    media: number
} {
    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: { maior: number, menor: number, media: number } = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([3, 4, 6, 10, 2]))

// c)
type AmostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => {maior: number, menor: number, media: number}
}