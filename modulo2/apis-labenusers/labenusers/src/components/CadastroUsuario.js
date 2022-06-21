import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Cadastro = styled.div`
border: 1px solid orange;
width: 70%;
height: 90%;
margin: 20px;
padding: 16px;
`

export default class CadastroUsuario extends React.Component {

    state ={
        inputNome: "",
        inputEmail: "",
        usuarios: [],
      }
    
    onChangeNome = (event) => {
        this.setState({inputNome: event.target.value})
    }
    onChangeEmail = (event) => {
        this.setState({inputEmail: event.target.value})
    }
    onClickCadastrar = () => {
        // Manda a requisição
        const body = {
            name: this.state.inputNome,
            email: this.state.inputEmail,
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
            headers: {
                Authorization: "daniela-pinheiro-ailton"
              }
        }).then((response) => {
            alert("Usuário cadastrado com sucesso!")
        }).catch((error) => {
            alert("Ops, ocorreu um erro.")
        })
        // Limpa o input
        this.setState({inputNome: ""})
        this.setState({inputEmail: ""})
    }

    render() {
        return <Cadastro>
            <input placeholder='Nome' onChange={this.onChangeNome} value={this.state.inputNome} />
            <input placeholder='Email' onChange={this.onChangeEmail} value={this.state.inputEmail} />
            <button onClick={this.onClickCadastrar}>Cadastrar</button>
        </Cadastro>
    }
}

