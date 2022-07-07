import React from "react"
import styled from 'styled-components'

export const Card = styled.div`

img{
    width: 200px;
    height: 300px;
    border: 1px solid red;
}
`
export default function CardPerfil(props) {
    return <Card>
        <img src={props.foto} />
        <p><strong>{props.nome}</strong>, {props.idade}</p>
        <p>{props.bio}</p>
        <button onClick={() => props.rejeitar(props.idEscolhida, false)}>X</button> {/* manda FALSE para a requisição */}
        <button onClick={() => props.curtir(props.idEscolhida, true)}>S2</button> {/* manda TRUE para a requisição */}
        <button onClick={props.mudaTelaMatches}>Matches</button>
    </Card>
}