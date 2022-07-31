import React from "react"
import { useNavigate } from "react-router-dom"
import LoginForm from "../../components/LoginForm/LoginForm"
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"
import { goToSignUpPage } from "../../router/coordinator"
import { LoginPageContainer } from "./styled"
import { Typography } from "@mui/material"
import { LargeSignUpButton } from "../../constants/buttons"
import logo from "../../assets/img/logo.png"

export default function LoginPage() {
    useUnprotectedPage()
    const navigate = useNavigate()

    return <LoginPageContainer>
        <img src={logo} alt="Logo" />
        <Typography variant="h4" mt={2}>LabEddit</Typography>
        <Typography variant="body2" mb={4}>O projeto de rede social da Labenu</Typography>
        
        <LoginForm />

        <LargeSignUpButton onClick={() => goToSignUpPage(navigate)}>Crie uma conta!</LargeSignUpButton>
    </LoginPageContainer>
}