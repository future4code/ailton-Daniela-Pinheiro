import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { login } from "../../services/users"
import { CircularProgress, TextField } from "@mui/material"
import { LargeButton } from "../../constants/buttons"
import { secondaryColor } from "../../constants/colors"
import { Form } from "../../constants/Form"

export default function LoginForm() {
    const navigate = useNavigate()
    const [form, onChangeInput, cleanInput] = useForm({email: "", password: ""})
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, cleanInput, navigate, setIsLoading)
    }

    return <Form onSubmit={onSubmitForm}>
        <TextField
            sx={{"& label.Mui-focused": {
                color: secondaryColor,
            }}}
            fullWidth
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
            sx={{"& label.Mui-focused": {
                color: secondaryColor,
            }}}
            fullWidth
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

        <LargeButton variant="contained" disableElevation type="submit">
            {isLoading ? <CircularProgress color={'inherit'} size={24} /> : <>Entrar</>}
        </LargeButton>
    </Form>
}