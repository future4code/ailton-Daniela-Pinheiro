import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToFeedPage } from "../router/coordinator"

export const login = (body, clean, navigate, loading) => {
    loading(true)
    axios.post(`${BASE_URL}/users/login`, body)
    .then(response => {
        localStorage.setItem("token", response.data.token)
        loading(false)
        clean()
        goToFeedPage(navigate)
    }).catch(() => {
        loading(false)
        alert("Ocorreu um erro. Verifique se todas as informações inseridas estão corretas ou tente novamente mais tarde.")
    })
}

export const signUp = (body, clean, navigate, loading) => {
    loading(true)
    axios.post(`${BASE_URL}/users/signup`, body)
    .then(response => {
        localStorage.setItem("token", response.data.token)
        clean()
        loading(false)
        goToFeedPage(navigate)
    }).catch(() => {
        loading(false)
        alert("Ocorreu um erro. Verifique se todas as informações inseridas estão corretas ou tente novamente mais tarde.")
    })
}