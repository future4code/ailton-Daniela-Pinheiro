import React from 'react'
import styled from 'styled-components'
import DetalhesPersonagens from './pages/DetalhesPersonagens/DetalhesPersonagens'
import ListaPersonagens from './pages/ListaPersonagens/ListaPersonagens'

class App extends React.Component {
  state = {
    telaAtual: "lista",
    urlPersonagem: "",
  }
  
  irParaDetalhes = (url) => {
    this.setState({telaAtual: "detalhes", urlPersonagem: url})
  }
  irParaLista = () => {
    this.setState({telaAtual: "lista", urlPersonagem: ""})
  }

  mudaTela = () => {
    switch (this.state.telaAtual) {
      case "lista":
        return <ListaPersonagens irParaDetalhes={this.irParaDetalhes} />
      case "detalhes":
        return <DetalhesPersonagens irParaLista={this.irParaLista} url={this.state.urlPersonagem} />
      default:
        return <ListaPersonagens irParaDetalhes={this.irParaDetalhes} />
    }
  }

 
  render() {
    return <div>
      {this.mudaTela()}
    </div>
  }
}
export default App;
