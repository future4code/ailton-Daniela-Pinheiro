import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToApplicationFormPage } from '../routes/coordinator'
import CardListTrips from '../components/CardListTrips'

import styled from 'styled-components'

const ContainerTrips = styled.div`
width: 100%;
height: 100%;
padding-top: 20px;
background-color: aliceblue;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`

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