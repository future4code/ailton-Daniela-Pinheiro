import React from 'react'
import TelaListaPlaylists from './pages/TelaListaPlaylists/TelaListaPlaylists'
import TelaDetalhesPlaylists from './pages/TelaDetalhesPlaylists/TelaDetalhesPlaylists'

class App extends React.Component {
  state = {
    telaAtual: "listaPlaylists",
    // playlists: [],
  }

  // componentDidMount() {}
  // componentDidUpdate() {}

  // Funções de renderização condicional de telas
  mudaTela = () => {
    switch (this.state.telaAtual) {
      case "listaPlaylists":
        return <TelaListaPlaylists />
      case "detalhesPlaylists":
        return <TelaDetalhesPlaylists />
      default:
        return <TelaListaPlaylists />
    }
  } 
  onClickMudaTela = () => {
    if(this.state.telaAtual === "listaPlaylists") {
      this.setState({telaAtual: "detalhesPlaylists"})
    } else {
      this.setState({telaAtual: "listaPlaylists"})
    }
    
  }

  render() {
    return <div>
      {this.mudaTela()}
      <button onClick={this.onClickMudaTela}>Mudar de Tela</button>
    </div>
  }
}
export default App;
