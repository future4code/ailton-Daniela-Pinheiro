import React from 'react'
import { ContainerAdminHome, ContainerButtons, ContainerLogout } from './AdminHomePage-styled'
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

    // Função logout
    const onClickLogout = () => {
        localStorage.removeItem('token')

        goToHomePage(navigate)
    }

    return <ContainerAdminHome>
        <ContainerLogout>
            <button onClick={onClickLogout}>LOGOUT</button>
        </ContainerLogout>
        <h2>Administrar suas viagens</h2>

        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>Ocorreu um erro.</p>}
        {!isLoading && !data && <p>Não há nenhuma viagem marcada.</p>}
        {!isLoading && data && tripsList}
        
        <ContainerButtons>
            <Button onClick={() => goToHomePage(navigate)}>Voltar</Button>
            <Button onClick={() => goToCreateTripPage(navigate)}>Nova Viagem</Button>
        </ContainerButtons>
        
    </ContainerAdminHome>
}