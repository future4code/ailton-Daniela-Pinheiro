import React from 'react'
import TelaListaPlaylists from './pages/TelaListaPlaylists/TelaListaPlaylists'
import TelaDetalhesPlaylists from './pages/TelaDetalhesPlaylists/TelaDetalhesPlaylists'
import axios from 'axios'
import { url_base } from './constants/url.js'

class App extends React.Component {
  state = {
    telaAtual: "listaPlaylists",
    playlists: [],
  }

  // Funções de ciclo de vida
  componentDidMount() {
    this.getAllPlaylists()
  }
  // componentDidUpdate() {}

  // Requisições
  getAllPlaylists = () => {
    axios.get(url_base, {
      headers: {
        Authorization: 'daniela-pinheiro-ailton'
      }
    }).then((response) => {
      this.setState({playlists: response.data.result.list})
    }).catch((error) => {
      console.log(error.response)
    })
  }

  // Funções de renderização condicional de telas
  mudaTela = () => {
    switch (this.state.telaAtual) {
      case "listaPlaylists":
        return <TelaListaPlaylists
          listaPlaylists={this.state.playlists}
          detalhesPlaylists={this.onClickMudaTelaDetalhes}
        />
      case "detalhesPlaylists":
        return <TelaDetalhesPlaylists />
      // case "editarPlaylists":
      //   return </>
      // case "criarPlaylists":
      //   return </>
      default:
        return <TelaListaPlaylists /> //Tela de Criar??
    }
  } 

  // Funções de mudança entre telas
  onClickMudaTelaLista = () => {
    this.setState({telaAtual: "listaPlaylists"})
  }
  onClickMudaTelaDetalhes = () => {
    this.setState({telaAtual: "detalhesPlaylists"})
  }
  onClickMudaTelaEditar = () => {
    this.setState({telaAtual: "editarPlaylists"})
  }
  onClickMudaTelaCriar = () => {
    this.setState({telaAtual: "criarPlaylists"})
  }

  render() {

    return <div>
      {this.mudaTela()}
      <button onClick={this.onClickMudaTelaLista}>Lista</button>
      <button onClick={this.onClickMudaTelaDetalhes}>Detalhes</button>
      <button onClick={this.onClickMudaTelaCriar}>Criar</button>
      <button onClick={this.onClickMudaTelaEditar}>Editar</button>
    </div>
  }
}
export default App;
