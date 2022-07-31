import React from "react"
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import { ScreenContainer } from "../../constants/ScreenContainer"
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"
import { Typography } from "@mui/material"

export default function SignUpPage() {
    useUnprotectedPage()

    return <ScreenContainer>
        <Typography variant="h4" mb={5}>Olá, boas vindas ao LabEddit ;)</Typography>
        <SignUpForm />
    </ScreenContainer>
}