import React from 'react';
import styled from 'styled-components'

const ContainerMensagens = styled.div`
  flex-grow: 1;
  width: 470px;
  padding: 8px;
  border: 1px solid blue;
`

const MensagemIndividual = styled.div`
    display: flex;
    p {
        margin: 2px;
    }
`

class Mensagens extends React.Component {
  render() {
    return <ContainerMensagens>
        <MensagemIndividual>
            <p><b>Nome: </b></p>
            <p>Mensagem</p>
        </MensagemIndividual>
    </ContainerMensagens>
  }  
  
}

export default Mensagens
 