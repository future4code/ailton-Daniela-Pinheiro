import React from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useForm } from '../../hooks/useForm'
import { goBack } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import { useRequestData } from '../../hooks/useRequestData'

import axios from 'axios'
import { base_url } from '../../constants/url'

import { Button } from '../../constants/Button'

export default function CreateTripPage() {
    useProtectedPage()
    const navigate = useNavigate()

    const [form, onChangeForm, cleanInputs] = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })

    // constantes??
    const token = localStorage.getItem('token')
    const header = {
        headers: {
            auth: token
        }
    }
    // const [data, isLoading, error] = useRequestData("trip", "", form, header)

    const onSubmitCreate = (event) => {
        event.preventDefault()

        // Requisição com os dados
        axios.post(`${base_url}/trips`, form, header)
        .then(() => {
            alert("Viagem cadastrada com sucesso!")
        }).catch((error) => {
            alert("Ocorreu um erro. Verifique se todas as informações foram inseridas corretamente, ou tente novamente mais tarde.")
        })

        cleanInputs()
    }

    return <div>
        <Button onClick={() => goBack(navigate)}>Voltar</Button>
        <h3>Criação de viagem</h3>
        <form onSubmit={onSubmitCreate}>
            <input 
                name="name"
                placeholder="Nome"
                value={form.name}
                onChange={onChangeForm}
                required
            />
            <input 
                name="planet"
                placeholder="Planeta"
                value={form.planet}
                onChange={onChangeForm}
                required
            />
            <input 
                name="date"
                type="date"
                value={form.date}
                onChange={onChangeForm}
                required
            />
            <input 
                name="description"
                placeholder="Descrição"
                value={form.description}
                onChange={onChangeForm}
                required
            />
            <input 
                name="durationInDays"
                placeholder="Duração em dias"
                type="number"
                value={form.durationInDays}
                onChange={onChangeForm}
                required
            />
            
            <Button>Enviar</Button>
        </form>
    </div>
}