import React from 'react';
import styled from 'styled-components'

const ContainerEscrever = styled.div`
  width: 470px;
  height: 32px;
  padding: 8px;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const InputUsuario = styled.input`
  width: 20%;
`
const InputMensagem = styled.input`
  flex-grow: 1;
`

class EscreverMensagem extends React.Component {

    state = {
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

        // Guarda as informações de estado numa variável para ser exibida na tela
        
        this.setState({valorInputUsuario: "", valorInputMensagem: ""})
    }

    render () {
        return <ContainerEscrever>
            <InputUsuario value={this.state.valorInputUsuario} onChange={this.aoDigitarUsuario} placeholder='Usuário' />
            <InputMensagem value={this.state.valorInputMensagem} onChange={this.aoDigitarMensagem} placeholder='Mensagem' />
            <button onClick={this.aoClicarEnviar}>Enviar</button>
        </ContainerEscrever>
    }
}

export default EscreverMensagem