import axios from "axios"

export async function requestCEP(cep: string) {
    await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

}
