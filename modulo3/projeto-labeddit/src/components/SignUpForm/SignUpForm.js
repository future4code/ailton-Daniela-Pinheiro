import React from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { signUp } from "../../services/users"

export function SignUpForm() {
    const navigate = useNavigate()
    const [form, onChangeInput, cleanInput] = useForm({username: "", email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, cleanInput, navigate)
    }

    return <form onSubmit={onSubmitForm}>
        <input 
            name="username"
            placeholder="Nome"
            value={form.username}
            onChange={onChangeInput}
            required
        />
        <br/>
        <input 
            name="email"
            placeholder="E-mail"
            type="email"
            value={form.email}
            onChange={onChangeInput}
            required
        />
        <br/>
        <input
            name="password"
            placeholder="Senha"
            type="password"
            value={form.password}
            onChange={onChangeInput}
            pattern="[0-9a-zA-Z]{8,30}"
            title="Senha deve possuir no mínimo 8 e no máximo 30 caracteres."
            required
        />
        <br/>
        <button type="submit">Cadastrar</button>
        <br/>
    </form>
}