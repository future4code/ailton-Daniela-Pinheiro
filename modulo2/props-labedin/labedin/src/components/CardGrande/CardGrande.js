import React from 'react';
import styled from 'styled-components';

const ContainerCardGrande = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const Foto = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const NomeTitulo = styled.h4 `
    margin-bottom: 15px;
`
const ContainerMenor = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <ContainerCardGrande>
            <Foto src={ props.imagem } />
            <ContainerMenor>
                <NomeTitulo>{ props.nome }</NomeTitulo>
                <p>{ props.descricao }</p>
            </ContainerMenor>
        </ContainerCardGrande>
    )
}

export default CardGrande;