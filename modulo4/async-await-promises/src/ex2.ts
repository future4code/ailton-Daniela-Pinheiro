import { BASE_URL } from './data/BASE_URL'
import axios from 'axios'

// Exercício 2
// a. A diferença está na posição em que se deve colocar o termo 'async'
//    Numa função nomeada, ele é o primeiro termo, mas na arrow function
//    vem entre o "=" e os parâmetros

// b. 
const pegarAssinantes = async(): Promise<any[]> => {
    const res = await axios.get(`${BASE_URL}/subscribers`)
    return res.data
}

const teste = async(): Promise<any> => {
    console.log(await pegarAssinantes())
}
teste()