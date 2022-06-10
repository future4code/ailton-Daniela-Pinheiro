import './App.css';
import React from 'react';
import styled from 'styled-components'
import Mensagens from './components/Mensagens/Mensagens'
import EscreverMensagem from './components/EscreverMensagem/EscreverMensagem'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
`

function App() {
  return (
   <Container>
    <Mensagens />
    <EscreverMensagem />
   </Container>
  );
}

export default App;
