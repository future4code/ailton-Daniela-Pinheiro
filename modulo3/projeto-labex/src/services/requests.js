import axios from 'axios'
import { base_url } from '../constants/url'

// Lista de Viagens
export const getTrips = (saveData) => [
    axios.get(`${base_url}/trips`)
    .then((response) => {
        saveData(response.data.trips)
    }).catch((error) => {
        console.log(error)
    })
]