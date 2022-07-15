import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { base_url } from '../../constants/url'
import { ContainerApplication, ApplicationForm, ContainerButtons } from './ApplicationFormPage-styled'
import { useRequestData } from '../../hooks/useRequestData'
import { useForm } from '../../hooks/useForm'
import { listOfCountries } from '../../constants/listOfCountries'
import { Button } from '../../constants/Button'
import { goBack } from '../../routes/coordinator'

export default function ApplicationFormPage() {
    const navigate = useNavigate()
    
    const [data, isLoading, error] = useRequestData("trips", "")
    const [tripId, setTripId] = useState("")

    const onChangeTrip = (event) => {
        setTripId(event.target.value)
    }

    const [form, onChangeForm, cleanInputs] = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: ""
    })

    const onSubmitApply = (event) => {
        event.preventDefault()

        axios.post(`${base_url}/trips/${tripId}/apply`, form)
        .then(() => {
            alert("Inscrição feita com sucesso!")
            console.log(form)
        }).catch(() => {
            alert("Ocorreu um erro. Verifique se todas as informações foram inseridas corretamente, ou tente novamente mais tarde.")
        })

        cleanInputs()
    }

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
                {tripsOption}
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
            <button>Enviar</button>
        </ApplicationForm>

        <ContainerButtons>
            <Button onClick={() => goBack(navigate)}>Voltar</Button>
        </ContainerButtons>
    </ContainerApplication>
}