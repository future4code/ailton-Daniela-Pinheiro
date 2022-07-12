import React from 'react'
import { ContainerHome, BotaoGrande } from './HomePage-styled'
import { useNavigate } from 'react-router-dom'
import { goToListTripsPage, goToAdminHomePage } from '../../routes/coordinator'


export default function HomePage() {
    const navigate = useNavigate()

    return <ContainerHome>
        <BotaoGrande onClick={() => goToListTripsPage(navigate)}><strong>Lista de Viagens</strong></BotaoGrande>
        <BotaoGrande onClick={() => goToAdminHomePage(navigate)}><strong>Área Administrativa</strong></BotaoGrande>
    </ContainerHome>
}