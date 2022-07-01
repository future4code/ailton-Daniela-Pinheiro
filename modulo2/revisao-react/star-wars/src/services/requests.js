import axios from "axios"
import { url_base } from "../constants/urls"

export const pegarListaPersonagens = (saveData) => {
    axios.get(`${url_base}/people/`)
    .then((response) => {
        saveData(response.data.results)
    })
    .catch((error) => {
        console.log(error.response)
    })
}

export const pegarPersonagem = (url, saveData) => {
    axios.get(url)
    .then((response) => {
        saveData(response.data)
    })
    .catch((error) => {
        console.log(error.response)
    })
}

export const pegarPlaneta = (url, saveData) => {
    axios.get(url)
    .then((response) => {
        saveData(response.data.name)
    })
    .catch((error) => {
        console.log(error.response)
    })
}