import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const post = (body, clean) => {
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then(response => {
        // alert(response.data)
        clean()
    }).catch(() => {
        alert("Ocorreu um erro. Verifique se todas as informações inseridas estão corretas ou tente novamente mais tarde.")
    })
}

export const comment = (id, body, clean) => {
    axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then(response => {
        console.log(response.data)
        clean()
    }).catch(() => {
        alert("Ocorreu um erro. Verifique se todas as informações inseridas estão corretas ou tente novamente mais tarde.")
    })
}