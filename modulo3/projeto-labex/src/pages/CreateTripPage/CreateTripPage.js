import React from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { ContainerCreate, CreateTripForm, ContainerButtons } from './CreateTripPage-styled'
import { useForm } from '../../hooks/useForm'
import { goBack } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import { headers } from '../../constants/headers'
import {listOfPlanets} from '../../constants/listOfPLanets'

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

    const planets = listOfPlanets.map((planet, index) => {
        return <option key={index} value={planet}>{planet}</option>
    })

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
            <select 
                name="planet"
                value={form.planet}
                onChange={onChangeForm}
                required
            >
                <option value="">Planeta:</option>
                {planets}
            </select>
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

            <ContainerButtons>
                <Button onClick={() => goBack(navigate)}>Voltar</Button>
                <Button>Enviar</Button>
            </ContainerButtons>
        </CreateTripForm>
    </ContainerCreate>
}