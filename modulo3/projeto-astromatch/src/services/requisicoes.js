import axios from 'axios'
import { url_base } from '../constants/url'

// getProfileToChoose (TelaInicial)
export const getProfileToChoose = (funcao) => {
    axios.get(`${url_base}/person`)
    .then((response) => {
        funcao(response.data.profile)
    })        
    .catch((error) => {
        console.log(error)
    })
}
// choosePerson (TelaInicial)
export const choosePerson = (id, escolha, funcao) => {
    const body = {
        "id": id,
        "choice": escolha
    }
    axios.post(`${url_base}/choose-person`, body)
    .then(() => {
        funcao(true)
    })
    .catch((error) => {
        console.log(error)
    })
}

// getMatches (TelaMatches)
export const getMatches = (funcao) => {
    axios.get(`${url_base}/matches`)
    .then((response) => {
        funcao(response.data.matches)
    })
    .catch((error) => {
        console.log(error)
    })
}

// Clear (App)