import React from "react"
import styled from "styled-components"

const ContainerCardPequeno = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px;
    margin-bottom: 8px;
    height: 60px;
`

const CardPequeno = (props) => {
    return (
        <ContainerCardPequeno>
            <p><b>{ props.titulo }: </b>{ props.conteudo }</p>
        </ContainerCardPequeno>
    )
}

export default CardPequeno