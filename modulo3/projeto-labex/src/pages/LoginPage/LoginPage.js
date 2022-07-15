import React from 'react'
import axios from 'axios'
import { base_url } from '../../constants/url'
import { ContainerLogin, CardLogin, ButtonLogin } from './LoginPage-styled'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToAdminHomePage } from '../../routes/coordinator'
import { useForm } from '../../hooks/useForm'

export default function LoginPage() {
    const navigate = useNavigate()

    const [form, onChangeForm, cleanInputs] = useForm({email: "", password: ""})

    const onSubmitLogin = (event) => {
        event.preventDefault()

        axios.post(`${base_url}/login`, form)
        .then((response) => {
            localStorage.setItem('token', response.data.token)
            goToAdminHomePage(navigate)
        }).catch(() => {
            alert("Ocorreu um erro. Verifique se todas as informações inseridas estão corretas.")
        })

        cleanInputs()
    }

    return <ContainerLogin>
        <CardLogin>
            <h2>Faça o login para prosseguir</h2>
            <form onSubmit={onSubmitLogin}>
                <input
                    type={'email'}
                    placeholder={"E-mail"}
                    name="email"
                    value={form.email}
                    onChange={onChangeForm}
                    required
                />
                <input
                    type={'password'}
                    placeholder={"Senha"}
                    name="password"
                    value={form.password}
                    onChange={onChangeForm}
                    pattern="^.{6,}"
                    title="A senha deve conter no mínimo 6 caracteres."
                    required
                />
                <div>
                    <ButtonLogin onClick={() => goToHomePage(navigate)}>Voltar</ButtonLogin>
                    <ButtonLogin>Entrar</ButtonLogin>
                </div>
            </form>
            
        </CardLogin>
    </ContainerLogin>
}