import { BASE_URL } from './data/BASE_URL'
import axios from 'axios'

// Exercício 3

type User = {
    id: string;
    name: string;
    email: string;
}
// a. Não acusa erro de tipagem, mas os tipos da Promise e da resposta diferem

// b. Fazer o mapeamento garante que o retorno na função e a Promise não
//    apresentem tipagens conflitantes

// c. 
const pegarAssinantes = async(): Promise<User[]> => {
    const res = await axios.get(`${BASE_URL}/subscribers`)
    return res.data.map((user: any) => {
        return {
            id: user.id,
            name: user.name,
            email: user.email
        }
    })
}

const teste = async(): Promise<any> => {
    console.log(await pegarAssinantes())
}
teste()