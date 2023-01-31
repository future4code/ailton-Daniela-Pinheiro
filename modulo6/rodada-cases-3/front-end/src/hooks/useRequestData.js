import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../constants/url"

export const useRequestData = (initialData) => {
    const [ data, setData ] = useState(initialData)

    useEffect(() => {
        axios.get(BASE_URL)
        .then(response => {
            setData(response.data)
        }).catch(error => {
            alert(error.response.data.message)
        })

    }, [data])

    return data
}