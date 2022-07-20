import axios from "axios"
import { base_url } from "../constants/url"
import { headers } from "../constants/headers"
import { goToAdminHomePage } from "../routes/coordinator"

// Requisição de login
export const login = (body, navigate) => {
    axios.post(`${base_url}/login`, body)
        .then((response) => {
            // Guarda o token recebido no localStorage
            localStorage.setItem('token', response.data.token)
            // Direciona para a área administrativa
            goToAdminHomePage(navigate)
        }).catch(() => {
            alert("Ocorreu um erro. Verifique se todas as informações inseridas estão corretas.")
        })
}

// Requisição aprovar/reprovar candidato (CardCandidatesToApprove)
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

// Requisição deletar viagem (AdminHomePage)
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

// Requisição inscrever-se para viagem (ApplicationFormPage)
export const applyToTrip = (tripId, body) => {
    axios.post(`${base_url}/trips/${tripId}/apply`, body)
        .then(() => {
            alert("Inscrição feita com sucesso!")
        }).catch(() => {
            alert("Ocorreu um erro. Verifique se todas as informações foram inseridas corretamente, ou tente novamente mais tarde.")
        })
}

// Requisição criar viagem (CreateTripPage)
export const createTrip = (body) => {
    axios.post(`${base_url}/trips`, body, headers)
        .then(() => {
            alert("Viagem cadastrada com sucesso!")
        }).catch(() => {
            alert("Ocorreu um erro. Verifique se todas as informações foram inseridas corretamente, ou tente novamente mais tarde.")
        })
}