import React from 'react';
import styled from 'styled-components';

const Lista = styled.div`
border: 1px solid orange;
width: 70%;
height: 90%;
margin: 20px;
padding: 16px;
div {
    display: flex;
    align-items: center;
}
button {
    margin-left: 8px;
}
`

export default class ListaUsuario extends React.Component {
    onClickVoltar = () => {
        // volta para a tela de cadastro
        console.log("Volta")
    }

    render() {
        const listaUsuarios = this.props.lista.map((usuario) => {
            return <div key={usuario.id}>
                <p>{usuario.name}</p>
                <button>X</button>
                </div>
        })
        return <Lista>
            {listaUsuarios}
            <button onClick={this.onClickVoltar}>Voltar</button>
        </Lista>
    }
  }