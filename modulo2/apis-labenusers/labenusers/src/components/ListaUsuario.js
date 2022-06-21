import React from 'react';
import styled from 'styled-components';

const Lista = styled.div`
border: 1px solid orange;
width: 70%;
height: 90%;
margin: 20px;
padding: 16px;
`

export default class ListaUsuario extends React.Component {
    onClickVoltar = () => {
        // volta para a tela de cadastro
        console.log("Volta")
    }

    render() {
        const listaUsuarios = this.props.lista.map((usuario, index) => {
            return <div key={index}>
                <p>{usuario.nome}</p>
                <p>{usuario.email}</p>
            </div>
        })
        return <Lista>
            {listaUsuarios}
            <button onClick={this.onClickVoltar}>Voltar</button>
        </Lista>
    }
  }