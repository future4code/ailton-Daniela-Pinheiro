import React from 'react'
import styled from 'styled-components'
import fundo from '../assets/img/imagem-fundo.jpg'

const ContainerHome = styled.div`
width: 100%;
height: 100%;
background-image: url(${fundo});
object-fit: cover;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
div {
    display: flex;
    align-items: center;
}
`
const BotaoGrande = styled.button`
background-color: #CCFFFF44;
width: 180px;
height: 64px;

margin: 8px;
border: 1px solid white;
border-radius: 6px;
font-size: 20px;
:hover {
    cursor: pointer;
    background-color: #CCFFFF77;
}
:active {
    cursor: pointer;
    mix-blend-mode: overlay;
}
`

export default function HomePage() {
    return <ContainerHome>
        <div>
            <BotaoGrande><strong>Viagens cadastradas</strong></BotaoGrande>
            <BotaoGrande><strong>Área administrativa</strong></BotaoGrande>
        </div>
    </ContainerHome>
}