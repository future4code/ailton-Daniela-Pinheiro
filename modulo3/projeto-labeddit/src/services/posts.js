import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const post = (body, clean, loading) => {
    loading(true)
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then(() => {
        clean()
        loading(false)
    }).catch(() => {
        loading(false)
        alert("Ocorreu um erro. Verifique se todas as informações inseridas estão corretas ou tente novamente mais tarde.")
    })
}

export const comment = (id, body, clean, loading) => {
    loading(true)
    axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then(() => {
        clean()
        loading(false)
    }).catch(() => {
        loading(false)
        alert("Ocorreu um erro. Verifique se todas as informações inseridas estão corretas ou tente novamente mais tarde.")
    })
}

export const votePost = (id, body) => {
    axios.put(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then(() => {
    }).catch(() => {
        alert("Ocorreu um erro, tente novamente mais tarde.")
    })
}