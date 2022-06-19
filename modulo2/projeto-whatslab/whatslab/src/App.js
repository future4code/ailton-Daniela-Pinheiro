import React from 'react';
import EscreverMensagem from './components/EscreverMensagem';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  color: darkslategray;
`

function App() {
  return <Container>
    <EscreverMensagem />
  </Container>
}

export default App;
