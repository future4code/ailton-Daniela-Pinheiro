import React from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { login } from "../../services/users"
import { TextField } from "@mui/material"
import { LargeButton } from "../../constants/buttons"

export function LoginForm() {
    const navigate = useNavigate()
    const [form, onChangeInput, cleanInput] = useForm({email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, cleanInput, navigate)
    }

    return <form onSubmit={onSubmitForm}>
        <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined" 
            name="email"
            type="email"
            value={form.email}
            onChange={onChangeInput}
            required
            margin="normal"
        />
        <TextField
            id="outlined-basic"
            label="Senha"
            variant="outlined" 
            name="password"
            type="password"
            value={form.password}
            onChange={onChangeInput}
            required
            margin="normal"
        />

        <LargeButton variant="contained" disableElevation type="submit">Entrar</LargeButton>

    </form>
}