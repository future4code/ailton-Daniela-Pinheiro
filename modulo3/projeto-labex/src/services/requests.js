import axios from "axios"
import { base_url } from "../constants/url"
import { headers } from "../constants/headers"

export const decideCandidate = (decision, tripId, candidateId) => {
    const refreshPage = () => {
        window.location.reload(true)
    }
    const body = {
        approve: decision
    }

    axios.put(`${base_url}/trips/${tripId}/candidates/${candidateId}/decide`, body, headers)
    .then(() => {
        refreshPage()
    }).catch(() => {
        alert("Ocorreu um erro. Tente novamente mais tarde.")
    })
}

export const deleteTrip = (tripId) => {
    const refreshPage = () => {
        window.location.reload(true)
    }

    if(window.confirm("Tem certeza que deseja cancelar esta viagem?")) {
        axios.delete(`${base_url}/trips/${tripId}`, headers)
        .then(() => {
            alert("Viagem cancelada com sucesso!")
            refreshPage()
        }).catch(() => {
            alert("Ocorreu um erro. Tente novamente mais tarde.")
        })
    }
}

export const applyToTrip = (tripId, body) => {
    axios.post(`${base_url}/trips/${tripId}/apply`, body)
        .then(() => {
            alert("Inscrição feita com sucesso!")
        }).catch(() => {
            alert("Ocorreu um erro. Verifique se todas as informações foram inseridas corretamente, ou tente novamente mais tarde.")
        })
}

export const createTrip = (body) => {
    axios.post(`${base_url}/trips`, body, headers)
        .then(() => {
            alert("Viagem cadastrada com sucesso!")
        }).catch(() => {
            alert("Ocorreu um erro. Verifique se todas as informações foram inseridas corretamente, ou tente novamente mais tarde.")
        })
}