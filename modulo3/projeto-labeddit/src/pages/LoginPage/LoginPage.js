import React from "react"
import { useNavigate } from "react-router-dom"
import { LoginForm } from "../../components/LoginForm/LoginForm"
import { goToSignUpPage } from "../../router/coordinator"

export default function LoginPage() {
    const navigate = useNavigate()

    return <div>
        <h2>Login</h2>
        
        <LoginForm />

        <button onClick={() => goToSignUpPage(navigate)} >Cadastrar</button>
    </div>
}