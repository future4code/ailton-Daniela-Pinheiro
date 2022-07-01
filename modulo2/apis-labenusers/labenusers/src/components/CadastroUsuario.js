import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Cadastro = styled.div`
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
margin: 32px 24px;
background-color: #ea7b00;
color: white;
padding: 8px;
border: none;
border-radius: 4px;
:hover {
    background-color: bisque;
    color: #ea7b00;
}
`
const Formulario = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 16px;
margin: 4px;
input{
    margin: 0 4px;
}
`
const BotaoCadastro = styled.button`
border: 1px solid #ea7b00;
background-color: white;
color: dimgray;
border-radius: 4px;
margin: 0 4px;
padding: 2px 4px;
:hover {
    background-color: bisque;
}
`

export default class CadastroUsuario extends React.Component {
    state ={
        inputNome: "",
        inputEmail: "",
      }
    
    // Funções do input controlado
    onChangeNome = (event) => {
        this.setState({inputNome: event.target.value})
    }
    onChangeEmail = (event) => {
        this.setState({inputEmail: event.target.value})
    }

    // Função cadastrar usuário
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
            alert("Ops, ocorreu um erro. Verifique se os dados inseridos estão corretos.")
        })
        // Limpa o input
        this.setState({inputNome: ""})
        this.setState({inputEmail: ""})
    }

    render() {
        return <Cadastro>
            <Titulo>Cadastrar Usuário</Titulo>
            <Formulario>
                <input 
                    placeholder='Nome'
                    onChange={this.onChangeNome}
                    value={this.state.inputNome}
                />
                <input
                    placeholder='Email'
                    onChange={this.onChangeEmail}
                    value={this.state.inputEmail}
                />
                <BotaoCadastro onClick={this.onClickCadastrar}>
                    Cadastrar
                </BotaoCadastro>
            </Formulario>
            <BotaoTela onClick={this.props.trocaTela}>
                Usuários Cadastrados
            </BotaoTela>
        </Cadastro>
    }
}

