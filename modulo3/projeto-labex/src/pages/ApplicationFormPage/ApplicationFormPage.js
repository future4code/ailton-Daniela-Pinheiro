import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../routes/coordinator'
import { useRequestData } from '../../hooks/useRequestData'
import { useForm } from '../../hooks/useForm'
import { applyToTrip } from '../../services/requests'
import { ContainerApplication, ApplicationForm, ContainerButtons } from './ApplicationFormPage-styled'
import { listOfCountries } from '../../constants/listOfCountries'
import { Button } from '../../constants/Button'

export default function ApplicationFormPage() {
    // Função navegação
    const navigate = useNavigate()
    // Requisição para pegar todas as viagens
    const [data, isLoading, error] = useRequestData("trips", "")
    // Estado e Função para guardar a id da viagem selecionada no formulário
    const [tripId, setTripId] = useState("")
    const onChangeTrip = (event) => {
        setTripId(event.target.value)
    }

    // Hook para o formulário
    const [form, onChangeForm, cleanInputs] = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: ""
    })
    // Função de submissão do formulário
    const onSubmitApply = (event) => {
        // Não atualiza a página
        event.preventDefault()
        // Requisição para inscrever-se na viagem
        applyToTrip(tripId, form)
        // Limpa os inputs
        cleanInputs()
    }

    // Renderização das opções para os inputs do tipo select do formulário
    const tripsOption = data.trips && data.trips.map((trip) => {
        return <option key={trip.id} value={trip.id}>{trip.name}</option>
    })
    const countriesOption = listOfCountries.map((country, index) => {
        return <option key={index} value={country}>{country}</option>
    })

    return <ContainerApplication>
        <h2>Formulário de inscrição</h2>
        
        <ApplicationForm onSubmit={onSubmitApply}>
            <select onChange={onChangeTrip} required>
                <option value="">Escolha sua viagem:</option>
                {isLoading && <option>Carregando opções...</option>}
                {!isLoading && error && <option>Ocorreu um erro.</option>}
                {!isLoading && data && tripsOption}
            </select>
            <input 
                name="name"
                placeholder="Nome"
                value={form.name}
                onChange={onChangeForm}
                required
            />
            <input 
                name="age"
                placeholder="Idade"
                type="number"
                value={form.age}
                onChange={onChangeForm}
                required
            />
            <input 
                name="applicationText"
                placeholder="Mensagem"
                value={form.applicationText}
                onChange={onChangeForm}
                required
            />
            <input 
                name="profession"
                placeholder="Profissão"
                value={form.profession}
                onChange={onChangeForm}
                required
            />
            <select
                name="country"
                value={form.country}
                onChange={onChangeForm}
                required
            >
                <option value="">País:</option>
                {countriesOption}
            </select>

            <ContainerButtons>
                <Button onClick={() => goBack(navigate)}>Voltar</Button>
                <Button>Enviar</Button>
            </ContainerButtons>
        </ApplicationForm>   
    </ContainerApplication>
}