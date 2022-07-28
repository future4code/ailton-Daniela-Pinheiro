import React from "react"
import { useNavigate } from "react-router-dom"
import { LoginForm } from "../../components/LoginForm/LoginForm"
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"
import { goToSignUpPage } from "../../router/coordinator"
import { Divider } from "@mui/material"
import { LargeSignUpButton } from "../../constants/buttons"

export default function LoginPage() {
    useUnprotectedPage()
    const navigate = useNavigate()

    return <div>
        <p>imagem</p>
        <h2>LabEddit</h2>
        <p>O projeto de rede social da Labenu</p>
        
        <LoginForm />

        <Divider variant="middle" />
        
        <LargeSignUpButton onClick={() => goToSignUpPage(navigate)}>Crie uma conta!</LargeSignUpButton>
    </div>
}