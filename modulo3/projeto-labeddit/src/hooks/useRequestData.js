import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const useRequestData = () => {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    // useEffect
    // axios.get(`${BASE_URL}/posts`)
    // `/${id}/comments`

    return [data, isLoading, error]
}