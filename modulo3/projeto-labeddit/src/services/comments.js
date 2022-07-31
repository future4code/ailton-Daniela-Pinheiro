import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const voteComment = (id, body) => {
    axios.put(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then(() => {
    }).catch(() => {
        alert("Ocorreu um erro, tente novamente mais tarde.")
    })
}