export type Extrato = {
    valor: number,
    data: string,
    descricao: string
}

export type ContaUsuario = {
    nome: string,
    cpf: number,
    dataNascimento: string,
    saldo: number,
    extratos: Extrato[]
}
