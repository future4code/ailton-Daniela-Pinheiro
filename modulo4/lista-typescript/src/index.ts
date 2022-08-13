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
    if(pontuacao) {
        const filme: Filme = {
            nome: nome,
            ano: ano,
            genero: genero,
            pontuacao: pontuacao
        }
        return filme
    } else {
        const filme: Filme = {
            nome: nome,
            ano: ano,
            genero: genero,
        }
        return filme
    }
}
// console.log(retornaFilme("Ilha do Tesouro", 2002, GENERO.ACAO))
// console.log(retornaFilme("Kiseki", 2011, GENERO.DRAMA, 73))

// EXERCICIO 4
enum SETOR {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}
type Colaboradores = {
    nome: string,
    salario: number,
    setor: SETOR,
    presencial: boolean
}[]

const pessoas: Colaboradores = [
	{ nome: "Marcos", salario: 2500, setor: SETOR.MARKETING, presencial: true},
	{ nome: "Maria", salario: 1500, setor: SETOR.VENDAS, presencial: false},
	{ nome: "Salete", salario: 2200, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "João", salario: 2800, setor: SETOR.MARKETING, presencial: false},
	{ nome: "Josué", salario: 5500, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "Natalia", salario: 4700, setor: SETOR.VENDAS, presencial: true},
	{ nome: "Paola", salario: 3500, setor: SETOR.MARKETING, presencial: true}
]

function retornaMarketingPresencial(colaboradores: Colaboradores): Colaboradores {
    const marketingPresencial = colaboradores.filter((pessoa) => {
        return pessoa.setor === "marketing" && pessoa.presencial
    })

    return marketingPresencial
}

// console.table(retornaMarketingPresencial(pessoas))


// EXERCICIO 5
enum ROLE {
    USER = "user",
    ADMIN = "admin"
}
type Usuario = {
    name: string,
    email: string,
    role: ROLE
}

const usuarios: Usuario[] = [
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
]

function retornaEmailAdmin(listaUsuarios: Usuario[]): string[] {
    const emailAdmin: string[] = listaUsuarios.filter((usuario) => {
        return usuario.role === "admin"
    }).map((usuario) => {
        return usuario.email
    })
    return emailAdmin
}

// console.log(retornaEmailAdmin(usuarios))


// EXERCICIO 6
type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const clientes: Cliente[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function retornaClientesNegativos(clientes: Cliente[]): Cliente[] {
    const clientesNegativos: Cliente[] = clientes.map(cliente => {
        const debitos: number = cliente.debitos.length > 0 && cliente.debitos.reduce((total, debito) => {
            return total + debito
        })
        const saldo: number = cliente.saldoTotal - debitos

        return {
            cliente: cliente.cliente,
            saldoTotal: saldo,
            debitos: cliente.debitos
        }
    }).filter(cliente => {
        return cliente.saldoTotal < 0
    })

    return clientesNegativos
}

// console.table(retornaClientesNegativos(clientes))


// EXERCICIO 7
type Estoque = {
    nome: string,
    quantidade: number,
    valorUnitario: number | string
}[]

const estoque: Estoque = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

const ajustaPreco = (preco :number): string => {
    const valorAjustado: string = preco.toFixed(2).replace('.', ',')
    return "R$ " + valorAjustado
}
const ordenaEstoque = (estoque: Estoque): Estoque => {
    const estoqueAjustado = estoque.map(produto => {
        const preco: string = ajustaPreco(produto.valorUnitario as number)
        return {
            nome: produto.nome,
            quantidade: produto.quantidade,
            valorUnitario: preco
        }
    }).sort((a, b) => { return a.quantidade - b.quantidade })

    return estoqueAjustado
}

// console.table(ordenaEstoque(estoque))


// EXERCICIO 8



// EXERCICIO 9
const retornaAnagramas = (palavra: string): number => {
    let anagramas: number = 1

    if(palavra.length > 1) {
        for(let i = 1; i <= palavra.length; i++) {
            anagramas = anagramas * i
        }
    }

    return anagramas
}
// console.log(retornaAnagramas("mesa"))


// EXERCICIO 10
function verificaCPF(cpf: string) {
    const numeros: string[] = cpf.split(".").join("").split("-").join("").split("")
    // 0 a 10
    // passar para number


    return numeros
}
console.log(verificaCPF("888.999.000-44"))


// EXERCICIO 11
const romanos: {letra: string, valor: number}[] =  [
    {letra: "M", valor: 1000},
    {letra: "CM", valor: 900},
    {letra: "D", valor: 500},
    {letra: "CD", valor: 400},
    {letra: "C", valor: 100},
    {letra: "XC", valor: 90},
    {letra: "L", valor: 50},
    {letra: "XL", valor: 40},
    {letra: "X", valor: 10},
    {letra: "IX", valor: 9},
    {letra: "V", valor: 5},
    {letra: "IV", valor: 4},
    {letra: "I", valor: 1}
]

function converteNumerosRomanos(numero: number): string {
    let numeroRomano: string = ""

    romanos.map(item => {
        if(numero >= item.valor) {
            numeroRomano += item.letra
            numero -= item.valor
        }  
    })

    return numeroRomano
}

// console.log(converteNumerosRomanos(1990))
