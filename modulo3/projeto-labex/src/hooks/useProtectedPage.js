import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToLoginPage } from '../routes/coordinator'

export const useProtectedPage = () => {
    // Função navegação
    const navigate = useNavigate()
    // Verificar se há um token salvo no localStorage
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token === null) {
            // Se não, direciona para o login
            goToLoginPage(navigate)
        }
    })
}