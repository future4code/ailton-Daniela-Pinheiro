import { BASE_URL } from './data/BASE_URL'
import axios from 'axios'

// Exercício 1
// a. Deve ser utilizado o .get

// b. :Promise <any[]>

// c.
async function pegarAssinantes(): Promise<any[]> {
    const res = await axios.get(`${BASE_URL}/subscribers`)
    return res.data
}

const teste = async(): Promise<any> => {
    console.log(await pegarAssinantes())
}
teste()