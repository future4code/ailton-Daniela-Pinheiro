import axios from 'axios'
import { useState, useEffect } from 'react'
import { base_url } from '../constants/url'

export const useRequestData = (path, id, headers) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${base_url}/${path}/${id}`, headers)
        .then((response) => {
            setData(response.data)
            setIsLoading(false)
        }).catch((error) => {
            setError(error)
            setIsLoading(false)
        })
    }, [])

    return [data, isLoading, error]
}