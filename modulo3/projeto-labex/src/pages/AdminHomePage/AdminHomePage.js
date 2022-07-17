import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToCreateTripPage, goToTripDetailsPage } from '../../routes/coordinator'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useRequestData } from '../../hooks/useRequestData'
import { deleteTrip } from '../../services/requests'
import { ContainerAdminHome, ContainerButtons, ContainerLogout, ButtonAdminHome, CardAdminHome, CardText, ContainerCardButtons } from './AdminHomePage-styled'
import { Button } from '../../constants/Button'

export default function AdminHomePage() {
    // Função de verificação de login
    useProtectedPage()
    // Função navegação
    const navigate = useNavigate()
    // Função de logout
    const onClickLogout = () => {
        // Apaga o token do localStorage
        localStorage.removeItem('token')
        goToHomePage(navigate)
    }

    // Requisição para pegar todas as viagens
    const [data, isLoading, error] = useRequestData("trips", "")
    // Renderização das viagens na tela
    const tripsList = data.trips && data.trips.map((trip) => {
        return <CardAdminHome key={trip.id}>
            <h3>{trip.name}</h3>

            <p><strong>Descrição:</strong> {trip.description}</p>
            <p><strong>Planeta:</strong> {trip.planet}</p>
            <p><strong>Duração:</strong> {trip.durationInDays} dias</p>
            <p><strong>Data:</strong> {trip.date}</p> 

            <ContainerCardButtons>
                <ButtonAdminHome onClick={() => goToTripDetailsPage(navigate, trip.id)}>Detalhes da viagem</ButtonAdminHome>
                <ButtonAdminHome onClick={() => deleteTrip(trip.id)}>Cancelar viagem</ButtonAdminHome>
            </ContainerCardButtons>
            
        </CardAdminHome>
    })

    return <ContainerAdminHome>
        <ContainerButtons>
            <Button onClick={() => goToHomePage(navigate)}>Voltar</Button>
            <Button onClick={() => goToCreateTripPage(navigate)}>Nova Viagem</Button>
        </ContainerButtons>

        <h2>Administrar suas viagens</h2>

        {isLoading && <CardText>Carregando...</CardText>}
        {!isLoading && error && <CardText>Ocorreu um erro.</CardText>}
        {!isLoading && !data && <CardText>Não há nenhuma viagem marcada.</CardText>}
        {!isLoading && data && tripsList}

        <ContainerLogout>
            <ButtonAdminHome onClick={onClickLogout}><strong>LOGOUT</strong></ButtonAdminHome>
        </ContainerLogout>    
    </ContainerAdminHome>
}