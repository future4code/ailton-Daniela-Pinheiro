import React from 'react'
import { ApplicationForm } from './ApplicationFormPage-styled'
import { useRequestData } from '../../hooks/useRequestData'
import { useForm } from '../../hooks/useForm'
import axios from 'axios'
import { base_url } from '../../constants/url'
import { Button } from '../../constants/Button'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../routes/coordinator'

export default function ApplicationFormPage() {
    const navigate = useNavigate()
    
    const [data, isLoading, error] = useRequestData("trips", "")

    const tripsOption = data.trips && data.trips.map((trip) => {
        return <option key={trip.id} value={trip.id}>{trip.name}</option>
    })

    const [form, onChangeForm, cleanInputs] = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: ""
    })

    const onSubmitApply = (event, id) => {
        event.preventDefault()

        axios.post(`${base_url}/trips/${id}/apply`, form)
        .then(() => {
            alert("Inscrição feita com sucesso!")

        }).catch(() => {
            alert("Ocorreu um erro. Verifique se todas as informações foram inseridas corretamente, ou tente novamente mais tarde.")
        })

        cleanInputs()
    }

    return <div>
        <Button onClick={() => goBack(navigate)}>Voltar</Button>
        <h3>Formulário de inscrição</h3>
        <ApplicationForm onSubmit={onSubmitApply}>
            <select required>
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
            <input 
                name="country"
                placeholder="País"
                // type="country"
                value={form.country}
                onChange={onChangeForm}
                required
            />

            <button>Enviar</button>
        </ApplicationForm>
    </div>
}