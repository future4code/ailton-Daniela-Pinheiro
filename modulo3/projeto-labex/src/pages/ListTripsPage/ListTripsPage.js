import React from 'react'
import { ContainerTrips } from './ListTripsPage-styled'
import { useNavigate } from 'react-router-dom'
import { goBack, goToApplicationFormPage } from '../../routes/coordinator'
import CardListTrips from '../../components/CardListTrips/CardListTrips'


export default function ListTripsPage() {

    const navigate = useNavigate()
   
    return <ContainerTrips>
        <div>
            <button onClick={() => goBack(navigate)}>Voltar</button>
            <button onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</button>
        </div>
        <CardListTrips />
    </ContainerTrips>
}