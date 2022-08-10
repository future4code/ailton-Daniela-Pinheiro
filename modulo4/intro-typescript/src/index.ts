// EXERCÍCIO 1
function checaTriangulo(a: number, b: number, c: number): string {
    if (a !== b && b !== c) {
        return "Escaleno";
    } else if (a === b && b === c) {
        return "Equilátero";
    } else {
        return "Isósceles";
    }
}

// console.log(checaTriangulo(3, 3, 3))
// console.log(checaTriangulo(3, 4, 4))
// console.log(checaTriangulo(3, 4, 5))


// EXERCÍCIO 2 
// ???????
function imprimeTresCoresFavoritas(): void {
    const cor1: string = prompt("Insira sua primeira cor favorita")
    const cor2: string = prompt("Insira sua segunda cor favorita")
    const cor3: string = prompt("Insira sua terceira cor favorita")
    console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 3
function checaAnoBissexto(ano: number): boolean {
    const cond1: boolean = ano % 400 === 0
    const cond2: boolean = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
}

// console.log(checaAnoBissexto(2022))
// console.log(checaAnoBissexto(2024))


// EXERCÍCIO 4
function comparaDoisNumeros(num1: number, num2: number): number {
    let maiorNumero: number
    let menorNumero: number

    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2;
    } else {
        maiorNumero = num2;
        menorNumero = num1;
    }

    const diferenca: number = maiorNumero - menorNumero;

    return diferenca
}

// console.log(comparaDoisNumeros(6, 20))
// console.log(comparaDoisNumeros(13, 5))


// EXERCÍCIO 5
function checaRenovacaoRG(anoAtual: number, anoNascimento: number, anoEmissao: number): string {
    let idade: number = anoAtual - anoNascimento
    let tempoCarteira: number = anoAtual - anoEmissao

    if (idade <= 20) {
        return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"

    } else if (idade >= 20 || idade <= 50) {
        return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"

    } else if (idade > 50) {
        return tempoCarteira >= 15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"

    } else {
        return "error"
    }
}

// console.log(checaRenovacaoRG(2022, 1993, 2011))   