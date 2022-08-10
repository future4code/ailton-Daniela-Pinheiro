import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const useRequestData = (params) => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}${params}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(response => {
            setData(response.data)
        }).catch(error => {
            alert(error.response.data.message)
        })
    }, [data])

    return data
}