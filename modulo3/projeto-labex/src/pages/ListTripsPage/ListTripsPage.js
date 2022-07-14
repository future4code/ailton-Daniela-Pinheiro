import React from 'react'
import { ContainerTrips } from './ListTripsPage-styled'
import { Button } from '../../constants/Button'
import { useNavigate } from 'react-router-dom'
import { goBack, goToApplicationFormPage } from '../../routes/coordinator'
import CardListTrips from '../../components/CardListTrips/CardListTrips'


export default function ListTripsPage() {

    const navigate = useNavigate()
   
    return <ContainerTrips>
        <div>
            <Button onClick={() => goBack(navigate)}>Voltar</Button>
            <Button onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</Button>
        </div>
        <CardListTrips />
    </ContainerTrips>
}