import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToApplicationFormPage } from '../../routes/coordinator'
import { ContainerTrips, ContainerButtons } from './ListTripsPage-styled'
import { Button } from '../../constants/Button'
import CardListTrips from '../../components/CardListTrips/CardListTrips'


export default function ListTripsPage() {
    // Função navegação
    const navigate = useNavigate()

    return <ContainerTrips>
        <ContainerButtons>            
            <Button onClick={() => goBack(navigate)}>Voltar</Button>
            <Button onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</Button>
        </ContainerButtons>

        <h2>Próximas viagens</h2>

        <CardListTrips />        
    </ContainerTrips>
}