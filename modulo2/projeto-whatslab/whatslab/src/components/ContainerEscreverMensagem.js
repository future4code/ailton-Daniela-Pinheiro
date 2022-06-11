import React from 'react';
import styled from 'styled-components'
import EscreverMensagem from './EscreverMensagem';

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  color: darkslategray;
`

// Junta tudo em um container para ser exibido em App
class ContainerEscreverMensagem extends React.Component {
  render() {
    return <Container>
      <EscreverMensagem />
    </Container>
  }  
  
}

export default ContainerEscreverMensagem
 