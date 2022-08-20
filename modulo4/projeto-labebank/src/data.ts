// TIPOS
export type Transacao = {
    valor: number,
    data: string,
    descricao: string
}
export type ContaUsuario = {
    nome: string,
    cpf: number,
    dataNascimento: string,
    saldo: number,
    extratos: Transacao[]
}

// CONTAS
export let contas: ContaUsuario[] = [
    {
        nome: "Dan",
        cpf: 11122233344,
        dataNascimento: "06/08/1993", //mês, dia, ano
        saldo: 1000,
        extratos: [] 
    }
]