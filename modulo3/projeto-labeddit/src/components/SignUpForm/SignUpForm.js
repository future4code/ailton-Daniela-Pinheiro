import React from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { signUp } from "../../services/users"
import { TextField } from "@mui/material"
import { LargeButton } from "../../constants/buttons"
import { secondaryColor } from "../../constants/colors"
import { Form } from "../../constants/Form"

export default function SignUpForm() {
    const navigate = useNavigate()
    const [form, onChangeInput, cleanInput] = useForm({username: "", email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, cleanInput, navigate)
    }

    return <Form onSubmit={onSubmitForm}>
        <TextField
            sx={{"& label.Mui-focused": {
                color: secondaryColor,
            }}}
            fullWidth
            id="outlined-basic"
            label="Nome de usuário"
            variant="outlined" 
            name="username"
            value={form.username}
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
            pattern="[0-9a-zA-Z]{8,30}"
            title="Senha deve possuir no mínimo 8 e no máximo 30 caracteres."
            required
            margin="normal"
        />
        <p>Ao continuar, você concorda com o nosso <strong>Contrato de Usuário</strong> e nossa <strong>Política de Privacidade</strong></p>
        <input type="checkbox" id="scales" name="mailList" />
        <label for="mailList">Eu concordo em receber e-mails sobre coisas legais no Labeddit</label>
        <br/>
        <LargeButton variant="contained" disableElevation type="submit">Cadastrar</LargeButton>
    </Form>
}