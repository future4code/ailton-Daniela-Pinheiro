import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToListTripsPage, goToAdminHomePage } from '../routes/coordinator'

import styled from 'styled-components'
import background from '../assets/img/background-image.png'

const ContainerHome = styled.div`
width: 100%;
height: 100%;
background-image: url(${background});
object-fit: cover;
display: flex;
align-items: flex-end;
justify-content: center;
`
const BotaoGrande = styled.button`
background-color: #00006699;
width: 240px;
height: 64px;
margin: 80px 12px;
border: 1px solid white;
border-radius: 8px;
font-size: 20px;
color: white;
:hover {
    cursor: pointer;
    background-color: #000066CC;
}
:active {
    cursor: pointer;
    background-color: #00006655;
    mix-blend-mode: overlay;
}
`

export default function HomePage() {
    const navigate = useNavigate()

    return <ContainerHome>
        <BotaoGrande onClick={() => goToListTripsPage(navigate)}><strong>Lista de Viagens</strong></BotaoGrande>
        <BotaoGrande onClick={() => goToAdminHomePage(navigate)}><strong>Área Administrativa</strong></BotaoGrande>
    </ContainerHome>
}