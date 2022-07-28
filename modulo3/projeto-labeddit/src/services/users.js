import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToFeedPage } from "../router/coordinator"

export const login = (body, clean, navigate) => {
    axios.post(`${BASE_URL}/users/login`, body)
    .then(response => {
        localStorage.setItem("token", response.data.token)
        clean()
        goToFeedPage(navigate)

        // setRightButtonText("Logout")

    }).catch(() => {
        alert("Ocorreu um erro. Verifique se todas as informações inseridas estão corretas ou tente novamente mais tarde.")
    })
}

export const signUp = (body, clean, navigate) => {
    axios.post(`${BASE_URL}/users/signup`, body)
    .then(response => {
        localStorage.setItem("token", response.data.token)
        clean()
        goToFeedPage(navigate)

        // setRightButtonText("Logout")

    }).catch(() => {
        alert("Ocorreu um erro. Verifique se todas as informações inseridas estão corretas ou tente novamente mais tarde.")
    })
}