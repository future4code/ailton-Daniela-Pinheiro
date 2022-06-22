import axios from 'axios';
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
    // onClickVoltar = () => {
    //     // volta para a tela de cadastro
    //     console.log("Volta")
    // }

    onClickDeletar = (chave) => {
        axios.delete('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id', {
            headers: {
                Authorization: 'daniela-pinheiro-ailton'
            }
            // id: chave
        }).then((response) => {
            alert("Usuário deletado.")
        }).catch((error) => {
            alert("Ops, ocorreu um erro.")
        })
    }

    render() {
        const listaUsuarios = this.props.lista.map((usuario) => {
            return <div key={usuario.id}>
                <p>{usuario.name}</p>
                <button onClick={() => this.onClickDeletar(usuario.id)}>X</button>
                </div>
        })
        return <Lista>
            {listaUsuarios}
            <button onClick={this.props.trocaTela}>Tela de Cadastro</button>
        </Lista>
    }
  }