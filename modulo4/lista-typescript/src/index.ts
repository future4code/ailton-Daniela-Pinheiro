// EXERCICIO 1
function retornaMensagem(nome: string, data: string): string {
    const listaData: string[] = data.split("/")

    const dia: string = listaData[0]
    const mesNumero: string = listaData[1]
    const ano: string = listaData[2]

    let mes: string
    switch(mesNumero) {
        case "01":
            mes = "janeiro"
            break
        case "02":
            mes = "fevereiro"
            break
        case "03":
            mes = "março"
            break
        case "04":
            mes = "abril"
            break
        case "05":
            mes = "maio"
            break
        case "06":
            mes = "junho"
            break
        case "07":
            mes = "julho"
            break
        case "08":
            mes = "agosto"
            break
        case "09":
            mes = "setembro"
            break
        case "10":
            mes = "outubro"
            break
        case "11":
            mes = "novembro"
            break
        case "12":
            mes = "dezembro"
            break
    }

    return `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}.`
}
// console.log(retornaMensagem("Dan", "08/06/1993"))


// EXERCICIO 2
function retornaTipo(param: any) {
    return typeof param
}
// console.log(retornaTipo(2))
// console.log(retornaTipo("abcd"))
// console.log(retornaTipo(true))


// EXERCICIO 3
enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}
type Filme = {
    nome: string,
    ano: number,
    genero: GENERO,
    pontuacao? : number
}
function retornaFilme(nome: string, ano: number, genero: GENERO, pontuacao? : number): Filme {
    const filme: Filme = {
        nome: nome,
        ano: ano,
        genero: genero,
        pontuacao: pontuacao
    }
    return filme
}
// console.log(retornaFilme("Ilha do Tesouro", 2002, GENERO.ACAO))
// console.log(retornaFilme("Kiseki", 2011, GENERO.DRAMA, 73))

// EXERCICIO 4
enum SETOR {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}
type colaboradores = {
    nome: string,
    salario: number,
    setor: SETOR,
    presencial: boolean
}[]

const pessoas: colaboradores = [
	{ nome: "Marcos", salario: 2500, setor: SETOR.MARKETING, presencial: true},
	{ nome: "Maria", salario: 1500, setor: SETOR.VENDAS, presencial: false},
	{ nome: "Salete", salario: 2200, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "João", salario: 2800, setor: SETOR.MARKETING, presencial: false},
	{ nome: "Josué", salario: 5500, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "Natalia", salario: 4700, setor: SETOR.VENDAS, presencial: true},
	{ nome: "Paola", salario: 3500, setor: SETOR.MARKETING, presencial: true}
]

function retornaMarketingPresencial(colaboradores: colaboradores): colaboradores {
    const marketingPresencial = colaboradores.filter((pessoa) => {
        return pessoa.setor === "marketing" && pessoa.presencial
    })

    return marketingPresencial
}

// console.table(retornaMarketingPresencial(pessoas))


// EXERCICIO 5



// EXERCICIO 6
// EXERCICIO 7
// EXERCICIO 8
// EXERCICIO 9
// EXERCICIO 10
// EXERCICIO 11
