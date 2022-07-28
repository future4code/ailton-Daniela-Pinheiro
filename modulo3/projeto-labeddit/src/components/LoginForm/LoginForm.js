import React from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { login } from "../../services/users"

export function LoginForm() {
    const navigate = useNavigate()
    const [form, onChangeInput, cleanInput] = useForm({email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, cleanInput, navigate)
    }

    return <form onSubmit={onSubmitForm}>
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
            required
        />
        <br/>
        <button type="submit">Entrar</button>
        <br/>
    </form>
}