import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const Lista = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 20px;
`
const Titulo = styled.h3`
margin: 16px 32px;
`
const BotaoTela = styled.button`
width: 160px;
margin: 8px;
background-color: #ea7b00;
color: white;
padding: 8px;
border: none;
border-radius: 4px;
margin: 32px 24px;
:hover {
    background-color: bisque;
    color: #ea7b00;
}
`
const Usuario = styled.div`
width: 240px;
color: dimgray;
display: flex;
align-items: center;
justify-content: space-between;
padding: 8px 16px;
margin: 8px;
border: 1px solid darkgray;
border-radius: 8px;
`
const BotaoDeleta = styled.button`
border: 1px solid #ea7b00;
background-color: white;
color: dimgray;
border-radius: 4px;
padding: 2px 4px;
:hover {
    background-color: bisque;
}
`

export default class ListaUsuario extends React.Component {
    // Função deletar usuário
    onClickDeletar = (chave) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${chave}`, {
            headers: {
                Authorization: 'daniela-pinheiro-ailton'
            }
        }).then((response) => {
            alert("Usuário deletado.")
        }).catch((error) => {
            alert("Ops, ocorreu um erro.")
        })
    }

    render() {
        const listaUsuarios = this.props.lista.map((usuario) => {
            return <Usuario key={usuario.id}>
                <p>{usuario.name}</p>
                <BotaoDeleta onClick={() => this.onClickDeletar(usuario.id)}>
                    X
                </BotaoDeleta>
                </Usuario>
        })
        return <Lista>
            <Titulo>Usuários Cadastrados</Titulo>
            {listaUsuarios}
            <BotaoTela onClick={this.props.trocaTela}>
                Cadastrar Usuário
            </BotaoTela>
        </Lista>
    }
  }