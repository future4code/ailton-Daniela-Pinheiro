import React from "react"
import { useNavigate } from "react-router-dom"
import { LoginForm } from "../../components/LoginForm/LoginForm"
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"
import { goToSignUpPage } from "../../router/coordinator"

export default function LoginPage() {
    useUnprotectedPage()
    
    const navigate = useNavigate()

    return <div>
        <h2>Login</h2>
        
        <LoginForm />

        <button onClick={() => goToSignUpPage(navigate)} >Cadastrar</button>
    </div>
}