import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToFeedPage } from "../router/coordinator"

export const useUnprotectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token !== null) {
            goToFeedPage(navigate)
        }
    }, [navigate])
}