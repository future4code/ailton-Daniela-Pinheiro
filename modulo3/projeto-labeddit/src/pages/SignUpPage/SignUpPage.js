import React from "react"
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"

export default function SignUpPage() {
    useUnprotectedPage()

    return <div>
        <h1>Olá, boas vindas ao LabEddit ;)</h1>
        <SignUpForm />
    </div>
}