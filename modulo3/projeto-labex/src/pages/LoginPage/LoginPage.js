import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage} from '../../routes/coordinator'
import { login } from '../../services/requests'
import { useForm } from '../../hooks/useForm'
import { ContainerLogin, CardLogin, ButtonLogin } from './LoginPage-styled'

export default function LoginPage() {
    // Função navegação
    const navigate = useNavigate()

    // Hook para o formulário
    const [form, onChangeForm, cleanInputs] = useForm({email: "", password: ""})
    // Função de submissão do formulário
    const onSubmitLogin = (event) => {
        // Não atualiza a página
        event.preventDefault()
        // Requisição de login
        login(form, navigate)
        // Limpa os inputs
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