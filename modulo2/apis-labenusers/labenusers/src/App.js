import React from 'react';
import styled from 'styled-components';
import CadastroUsuario from './components/CadastroUsuario';
import ListaUsuario from './components/ListaUsuario';
import axios from 'axios';

const Container = styled.div`
width: 100vw;
height: 100vh;
display: grid;
grid-template-columns: 1fr 5fr;
grid-template-rows: 60px 1fr;
`
const Cabecalho = styled.header`
grid-area: 1 / 1 / 2 / 3;
background-color: #ea7b00;
display: flex;
align-items: center;
h2 {
  color: white;
  margin: 16px;
}
`
const MenuLateral = styled.nav`
grid-area: 2 / 1 / 3 / 2;
background-color: bisque;
display: flex;
flex-direction: column;
padding: 16px 0;
`
const ItemMenu = styled.p`
color: #ea7b00;
margin: 12px 20px;
:hover {
  color: white;
}
`
const Principal = styled.main`
grid-area: 2 / 2 / 3 / 3;
`

class App extends React.Component {
  state ={
    telaRenderizada: "cadastro",
    usuarios: [],
  }

  componentDidMount() {
    this.getAllUsers()
  }
  componentDidUpdate() {
    this.getAllUsers()
  }
  
  // Funções para trocar de tela
  trocaTelas = () => {
    switch(this.state.telaRenderizada) {
      case "cadastro":
        return <CadastroUsuario trocaTela={this.onClickIrLista} />
      case "lista":
        return <ListaUsuario lista={this.state.usuarios} trocaTela={this.onClickIrCadastro} />
      default:
        return <CadastroUsuario />
    }
  }
  onClickIrLista = () => {
    this.setState({telaRenderizada: "lista"})
  }
  onClickIrCadastro = () => {
    this.setState({telaRenderizada: "cadastro"})
  }

  // Requisição para pegar a lista de usuários
  getAllUsers = async () => { 
    try {
      const response = await axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
        headers: {
          Authorization: "daniela-pinheiro-ailton"
        }
      })
      this.setState({usuarios: response.data})
    } catch (error) {
      console.log(error.response.data)
    }
  }

  render() {
    return <Container>
      <Cabecalho>
        <h2>Labenusers</h2>
      </Cabecalho>
      <MenuLateral>
        <ItemMenu onClick={this.onClickIrCadastro}>
          Cadastrar Novo Usuário
        </ItemMenu>
        <ItemMenu onClick={this.onClickIrLista}>
          Usuários Cadastrados
        </ItemMenu>
      </MenuLateral>
      <Principal>
        {this.trocaTelas()}
      </Principal>
    </Container>
  }
}

export default App;
