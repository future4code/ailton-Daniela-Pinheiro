import { BASE_URL } from './data/BASE_URL'
import axios from 'axios'

// Exercício 4
// a. Pode ser .post ou .put, mas é mais recomendado o uso do .put
//    pois, caso a notícia já exista, ele atualiza seus dados
//    e caso não, ele cria uma nova

// b. 
async function criarNoticia(title: string, content: string, date: number): Promise<void> {
    await axios.put(`${BASE_URL}/news`, {
        title,
        content,
        date
    })

}

const teste = async(): Promise<any> => {
    console.log(await criarNoticia(
        "Frio retorna a São Paulo",
        "Nesta segunda(29), moradores da capital acordam quase congelando. A mínima prevista é de 9ºC, mas a sensação é de -200ºC.",
        29082022))
}
teste()