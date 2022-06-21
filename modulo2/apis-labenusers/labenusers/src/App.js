import './App.css';
import React from 'react';
import styled from 'styled-components';
import CadastroUsuario from './components/CadastroUsuario';
import ListaUsuario from './components/ListaUsuario';
import axios from 'axios';

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

class App extends React.Component {
  state ={
    // telaCadastro: true,
    usuarios: [],
  }

  componentDidMount() {
    this.getAllUsers()
  }

  componentDidUpdate() {
    this.getAllUsers()
  }

  getAllUsers = () => { axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
    headers: {
      Authorization: "daniela-pinheiro-ailton"
    }
  }).then((response) => {
    this.setState({usuarios: response.data})
  }).catch((error) => {
    console.log(error.response.data)
  })}

  render() {
    return <Container>
      <Cabecalho>
        <h3>Labenusers</h3>
        </Cabecalho>
      <CadastroUsuario />
      <ListaUsuario lista={this.state.usuarios} />
    </Container>
  }
}

export default App;
