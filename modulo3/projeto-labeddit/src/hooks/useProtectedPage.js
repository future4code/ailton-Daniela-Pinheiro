import { useLayoutEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToLoginPage } from "../router/coordinator"

export const useProtectedPage = () => {
    const navigate = useNavigate()

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if(token === null) {
            goToLoginPage(navigate)
        }
    }, [navigate])
}
