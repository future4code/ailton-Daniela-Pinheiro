import axios from "axios"

export async function requestCEP(cep: string): Promise<any> {
    try {
        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        return result.data
    } catch (error) {
        return null
    }
}
