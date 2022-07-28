import React from "react"
import { SignUpForm } from "../../components/SignUpForm/SignUpForm"
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"

export default function SignUpPage() {
    useUnprotectedPage()

    return <div>
        <h2>Cadastrar</h2>
        <SignUpForm />
    </div>
}