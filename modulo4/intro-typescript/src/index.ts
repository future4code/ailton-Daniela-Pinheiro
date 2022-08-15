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
function imprimeTresCoresFavoritas(cor1: string, cor2: string, cor3: string): void {
    console.log([cor1, cor2, cor3])
}

// imprimeTresCoresFavoritas('azul', 'vermelho', 'laranja')

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


// EXERCÍCIO 6
function operaDoisNumeros (numero1: number, numero2: number): void {
    const soma: number = numero1 + numero2
    const subtração: number = numero1 - numero2
    const multiplicação: number = numero1 * numero2
    const maior: number = (numero1 > numero2) ? numero1 : numero2

    console.log(`Soma: ${soma}\nSubtração: ${subtração}\nMultiplicação: ${multiplicação}\nMaior número: ${maior}`)
}

// operaDoisNumeros(2,3)


// EXERCÍCIO 7
function converteEmRNA (dna: string): string {
    return dna.replace(/A/g, "U").replace(/T/g, "A").replace(/C/g, "g").replace(/G/g, "C").toUpperCase()
}

// console.log(converteEmRNA("ATTGCTGCGCATTAACGACGCGTA"))

// EXERCÍCIO 8
function inverteString (string: string): string {
    const caracteres: string[] = string.split("")
    const caracteresInvertidos: string[] = caracteres.reverse()
    const stringInvertida: string = caracteresInvertidos.join("")

    return stringInvertida
}

// console.log(inverteString("acbdefghij"))


// EXERCÍCIO 9
function validaEstudanteLabenu (
    idade: number,
    ensinoMedio: boolean,
    horasDisponiveis: number,
    curso: string
    ):boolean {
    if((curso === "integral") && (idade > 18) && (ensinoMedio) && (horasDisponiveis >= 40)) {
        return true
    } else if ((curso === "noturno") && (idade > 18) && (ensinoMedio) && (horasDisponiveis >= 20)) {
        return true
    } else {
        return false
    }   
}

// console.log(validaEstudanteLabenu(20, true, 50, "integral"))
// console.log(validaEstudanteLabenu(16, true, 40, "integral"))
// console.log(validaEstudanteLabenu(38, true, 20, "noturno"))