import React from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { ContainerCreate, CreateTripForm, ContainerButtons } from './CreateTripPage-styled'
import { useForm } from '../../hooks/useForm'
import { goBack } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import { headers } from '../../constants/headers'

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

    const onSubmitCreate = (event) => {
        event.preventDefault()

        // Requisição com os dados
        axios.post(`${base_url}/trips`, form, headers)
        .then(() => {
            alert("Viagem cadastrada com sucesso!")
        }).catch(() => {
            alert("Ocorreu um erro. Verifique se todas as informações foram inseridas corretamente, ou tente novamente mais tarde.")
        })

        cleanInputs()
    }

    return <ContainerCreate>
        
        <h2>Cadastrar nova viagem</h2>
        <CreateTripForm onSubmit={onSubmitCreate}>
            <input 
                name="name"
                placeholder="Nome"
                value={form.name}
                onChange={onChangeForm}
                required
            />
            {/* MUDAR PARA SELECT */}
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
        </CreateTripForm>

        <ContainerButtons>
            <Button onClick={() => goBack(navigate)}>Voltar</Button>
        </ContainerButtons>
    </ContainerCreate>
}