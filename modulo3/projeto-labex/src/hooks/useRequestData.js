import axios from 'axios'
import { useState, useEffect } from 'react'
import { base_url } from '../constants/url'

export const useRequestData = (requestName, id) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${base_url}/${requestName}/${id}`)
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