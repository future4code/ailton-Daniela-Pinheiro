import React from 'react'
import styled from 'styled-components'
import DetalhesPersonagens from './pages/DetalhesPersonagens/DetalhesPersonagens'
import ListaPersonagens from './pages/ListaPersonagens/ListaPersonagens'

class App extends React.Component {
  state = {
    telaAtual: "lista",
  }

  mudaTela = () => {
    switch (this.state.mudaTela) {
      case "lista":
        return <ListaPersonagens />
      case "detalhes":
        return <DetalhesPersonagens />
      default:
        return <ListaPersonagens />
    }
  }


  render() {
    return <div>
      {this.mudaTela()}
    </div>
  }
}
export default App;
