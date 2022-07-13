import React from 'react'
import { ContainerHome, ButtonHome } from './HomePage-styled'
import { useNavigate } from 'react-router-dom'
import { goToListTripsPage, goToAdminHomePage } from '../../routes/coordinator'


export default function HomePage() {
    const navigate = useNavigate()

    return <ContainerHome>
        <ButtonHome onClick={() => goToListTripsPage(navigate)}><strong>Lista de Viagens</strong></ButtonHome>
        <ButtonHome onClick={() => goToAdminHomePage(navigate)}><strong>Área Administrativa</strong></ButtonHome>
    </ContainerHome>
}