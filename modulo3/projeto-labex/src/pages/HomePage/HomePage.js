import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToListTripsPage, goToAdminHomePage } from '../../routes/coordinator'
import { ContainerHome, ButtonHome } from './HomePage-styled'

export default function HomePage() {
    // Função navegação
    const navigate = useNavigate()

    return <ContainerHome>
        <ButtonHome onClick={() => goToListTripsPage(navigate)}><strong>Próximas Viagens</strong></ButtonHome>
        <ButtonHome onClick={() => goToAdminHomePage(navigate)}><strong>Área Administrativa</strong></ButtonHome>
    </ContainerHome>
}