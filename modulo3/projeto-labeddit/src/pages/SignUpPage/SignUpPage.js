import React from "react"
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import { ScreenContainer } from "../../constants/ScreenContainer"
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"

export default function SignUpPage() {
    useUnprotectedPage()

    return <ScreenContainer>
        <h1>Olá, boas vindas ao LabEddit ;)</h1>
        <SignUpForm />
    </ScreenContainer>
}