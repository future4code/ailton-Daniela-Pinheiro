import './App.css';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`

const Cabecalho = styled.header`
background-color: orange;
width: 100%;
height: 60px;
display: flex;
align-items: center;
h3 {
  color: white;
  margin: 20px;
}
`
const Cadastro = styled.div`
border: 1px solid red;
width: 70%;
height: 90%;
margin: 20px;
padding: 16px;
`

class App extends React.Component {
  render() {
    return <Container>
      <Cabecalho>
        <h3>Labenusers</h3>
        </Cabecalho>
      <Cadastro>
        Formulário
      </Cadastro>
    </Container>
  }
}

export default App;
