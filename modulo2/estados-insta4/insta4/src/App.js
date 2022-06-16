import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
  padding: 8px 12px;
  `
  const CaixaTexto = styled.input`
    margin: 4px;
    padding: 2px 4px;
    border: 1px solid darkgray;
  `

  const BotaoPostar = styled.button`
    width: 80px;
    align-self: center;
    margin: 4px;
  `

class App extends React.Component {

  state = {
    componentes: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/id/1/50/50",
        fotoPost: "https://picsum.photos/id/40/200/150"
      },
      {
        nomeUsuario: "fulano",
        fotoUsuario: "https://picsum.photos/id/66/50/50",
        fotoPost: "https://picsum.photos/id/3/200/150"
      },
      {
        nomeUsuario: "sicr234",
        fotoUsuario: "https://picsum.photos/id/10/50/50",
        fotoPost: "https://picsum.photos/id/22/200/150"
      }
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",
  }

  onChangeNomeUsuario = (event) => {
    this.setState({valorInputNomeUsuario: event.target.value})
  }

  onChangeFotoUsuario = (event) => {
    this.setState({valorInputFotoUsuario: event.target.value})
  }

  onChangeFotoPost = (event) => {
    this.setState({valorInputFotoPost: event.target.value})
  }

  onClickCriaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    this.setState({
      componentes: [novoPost, ...this.state.componentes],
      valorInputNomeUsuario: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""
    })
  }

  render() {

    const componentePost = this.state.componentes.map((componente) => {
      return (<Post
      nomeUsuario = {componente.nomeUsuario}
      fotoUsuario = {componente.fotoUsuario}
      fotoPost = {componente.fotoPost}
      />)
    })


    return (
      <MainContainer>
        <Formulario>
          <CaixaTexto value={this.state.valorInputNomeUsuario} placeholder='Nome do Usuário' onChange={this.onChangeNomeUsuario} />
          <CaixaTexto value={this.state.valorInputFotoUsuario} placeholder='Url da Foto do Usuário' onChange={this.onChangeFotoUsuario} />
          <CaixaTexto value={this.state.valorInputFotoPost} placeholder='Url da Foto do Post' onChange={this.onChangeFotoPost} />
          <BotaoPostar onClick={this.onClickCriaPost}>Postar</BotaoPostar>
        </Formulario>
        {componentePost}
      </MainContainer>
    );
  }
}

export default App;
