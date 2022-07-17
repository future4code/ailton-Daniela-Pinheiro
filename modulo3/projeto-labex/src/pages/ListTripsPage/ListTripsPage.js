import React from 'react'
import { ContainerTrips, ContainerButtons } from './ListTripsPage-styled'
import { Button } from '../../constants/Button'
import { useNavigate } from 'react-router-dom'
import { goBack, goToApplicationFormPage } from '../../routes/coordinator'
import CardListTrips from '../../components/CardListTrips/CardListTrips'


export default function ListTripsPage() {
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