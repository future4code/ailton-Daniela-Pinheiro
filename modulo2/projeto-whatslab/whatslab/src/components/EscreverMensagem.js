import React from 'react';
import styled from 'styled-components'

const ContainerMensagens = styled.div`
  flex-grow: 1;
  width: 470px;
  padding: 8px;
  margin-bottom: 4px;
  background-color: #dce8f4;
  border-radius: 8px;
`
const MensagemExibida = styled.p`
  background-color: white;
  padding: 4px;
  border-radius: 4px;
`

const ContainerEscrever = styled.div`
  width: 470px;
  height: 32px;
  padding: 8px;
  background-color: #dce8f4;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const InputUsuario = styled.input`
  width: 20%;
  margin: 2px;
  padding: 4px;
  border: none;
`
const InputMensagem = styled.input`
  flex-grow: 1;
  margin: 2px;
  padding: 4px;
  border: none;
`
const BotaoEnviar = styled.button`
  margin: 2px;
  padding: 6px;
  background-color: white;
  border-radius: 6px;
  border: 1px solid #7a93ae;
  color: #57728e;
`

class EscreverMensagem extends React.Component {

    state = {
        listaMensagens: [], // Para ser exibida na tela
        valorInputUsuario: "",
        valorInputMensagem: ""
    }

    aoDigitarUsuario = (event) => {
        this.setState({valorInputUsuario: event.target.value})
    }

    aoDigitarMensagem = (event) => {
        this.setState({valorInputMensagem: event.target.value})
    }

    aoClicarEnviar = () => {
        // Guarda as informações de estado no array de mensagens para ser exibida na tela
        const novaMensagem = {
            usuario: this.state.valorInputUsuario,
            mensagem: this.state.valorInputMensagem
        }
        const novaListaMensagens = [...this.state.listaMensagens, novaMensagem]
        this.setState({ listaMensagens: novaListaMensagens })

        // Limpa o input
        this.setState({valorInputUsuario: "", valorInputMensagem: ""})
    }

    render () {

        // Tratamento do array para exibição
        const mostraMensagens = this.state.listaMensagens.map((mensagens) => {
            return <MensagemExibida>
                <b>{mensagens.usuario}: </b>{mensagens.mensagem}
            </MensagemExibida>
        })

        return <>
            <ContainerMensagens>
                {mostraMensagens}
            </ContainerMensagens>
            <ContainerEscrever>
                <InputUsuario value={this.state.valorInputUsuario} onChange={this.aoDigitarUsuario} placeholder='Usuário' />
                <InputMensagem value={this.state.valorInputMensagem} onChange={this.aoDigitarMensagem} placeholder='Mensagem' />
                <BotaoEnviar onClick={this.aoClicarEnviar}>Enviar</BotaoEnviar>
            </ContainerEscrever>
        </>
    }
}

export default EscreverMensagem