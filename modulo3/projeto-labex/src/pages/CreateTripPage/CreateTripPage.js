import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../routes/coordinator'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useForm } from '../../hooks/useForm'
import { createTrip } from '../../services/requests'
import { ContainerCreate, CreateTripForm, ContainerButtons } from './CreateTripPage-styled'
import {listOfPlanets} from '../../constants/listOfPLanets'
import { Button } from '../../constants/Button'

export default function CreateTripPage() {
    // Função de verificação de login
    useProtectedPage()
    // Função navegação
    const navigate = useNavigate()
    // Hook para o formulário
    const [form, onChangeForm, cleanInputs] = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })

    // Função de submissão do formulário
    const onSubmitCreate = (event) => {
        // Não atualiza a página
        event.preventDefault()
        // Requisição para criar nova viagem
        createTrip(form)
        // Limpa os inputs
        cleanInputs()
    }

    // Renderização das opções para o input do tipo select do formulário
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