import React from "react"
import { useForm } from "../../hooks/useForm"

export function LoginForm() {
    const [form, onChangeInput, cleanInput] = useForm({email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()

        // login

        cleanInput()
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
            // pattern="[0-9a-zA-Z]{8,30}"
            required
        />
        <br/>
        <button type="submit">Entrar</button>
        <br/>
    </form>
}