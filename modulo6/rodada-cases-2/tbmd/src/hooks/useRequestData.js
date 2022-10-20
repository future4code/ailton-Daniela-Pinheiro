import { useState, useEffect } from "react"
import axios from "axios"
import { API_KEY } from "../constants/authorization"
import { API_BASE_URL } from "../constants/urls"

export const useRequestData = (initialData, pathParams, page="") => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(`${API_BASE_URL}${pathParams}${API_KEY}&language=pt-BR${page}`, {
        }).then(response => {
            setData(response.data)
        }).catch(error => {
            alert(error.response.data.message)
        })
    }, [data])

    return data
}