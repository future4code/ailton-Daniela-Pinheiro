import React from 'react'
import { Button } from '../../constants/Button'
import { useNavigate } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { goToHomePage, goToCreateTripPage, goToTripDetailsPage } from '../../routes/coordinator'
import { useRequestData } from '../../hooks/useRequestData'


export default function AdminHomePage() {
    useProtectedPage()

    const navigate = useNavigate()

    const [data, isLoading, error] = useRequestData("trips", "")

    const tripsList = data.trips && data.trips.map((trip) => {
        return <div key={trip.id}>
            <p>{trip.name}</p>
            <p>{trip.date}</p>
            <button onClick={() => goToTripDetailsPage(navigate, trip.id)}>Detalhes</button>
        </div>
    })

    // COLOCAR NO HEADER??
    const onClickLogout = () => {
        localStorage.removeItem('token')

        goToHomePage(navigate)
    }

    return <div>
        <h3>Área Administrativa</h3>
        <p>Lista de viagens</p>
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>Ocorreu um erro.</p>}
        {!isLoading && !data && <p>Não há nenhuma viagem marcada.</p>}
        {!isLoading && data && tripsList}
        <Button onClick={() => goToHomePage(navigate)}>Voltar</Button>
        {/* <Button onClick={() => goToTripDetailsPage(navigate, "2AaaNKGWQ7PMcEojWPRv")}>Detalhes da viagem TESTE</Button> */}
        <Button onClick={() => goToCreateTripPage(navigate)}>Nova Viagem</Button>
        <Button onClick={onClickLogout}>LOGOUT</Button>
    </div>
}