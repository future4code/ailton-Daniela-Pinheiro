import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { base_url } from '../../constants/url'
import { goToAdminHomePage, goToTripDetailsPage } from '../../routes/coordinator'

export default function LoginPage() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const onClickLogin = () => {
        // console.log(email, password)
        setEmail("")
        setPassword("")

        const body = {
            email: email,
            password: password,
        }
        axios.post(`${base_url}/login`, body)
        .then((response) => {
            localStorage.setItem('token', response.data.token)

            goToAdminHomePage(navigate)
            // goToTripDetailsPage(navigate, "2AaaNKGWQ7PMcEojWPRv")

        }).catch(() => {
            alert("Ocorreu um erro. Verifique se todas as informações inseridas estão corretas.")
        })
    }

    return <div>
        <input placeholder={"E-mail"} value={email} onChange={onChangeEmail} />
        <input type={'password'} placeholder={"Senha"} value={password} onChange={onChangePassword} />
        <button onClick={onClickLogin}>Entrar</button>
    </div>
}