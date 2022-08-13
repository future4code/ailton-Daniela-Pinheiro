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
console.log(retornaMensagem("Dan", "08/06/1993"))


// EXERCICIO 2

// EXERCICIO 3
// EXERCICIO 4
// EXERCICIO 5
// EXERCICIO 6
// EXERCICIO 7
// EXERCICIO 8
// EXERCICIO 9
// EXERCICIO 10
// EXERCICIO 11
