import React from 'react'
import TelaListaPlaylists from './pages/TelaListaPlaylists/TelaListaPlaylists'
import TelaDetalhesPlaylists from './pages/TelaDetalhesPlaylists/TelaDetalhesPlaylists'
import TelaCriarPlaylists from './pages/TelaCriarPlaylists/TelaCriarPlaylists'
import TelaEditarPlaylists from './pages/TelaEditarPlaylists/TelaEditarPlaylists'
import axios from 'axios'
import { url_base } from './constants/url.js'

class App extends React.Component {
  state = {
    telaAtual: "listaPlaylists",
    playlists: [],
    idPlaylistEscolhida: "",
    namePlaylistEscolhida: "",
  }

  // Funções de ciclo de vida
  componentDidMount() {
    this.getAllPlaylists()
  }
  componentDidUpdate(prevState) {
    if(this.state.playlists !== prevState.playlists) {
      this.getAllPlaylists()
    }
  }

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
          mudaTelaDetalhes={this.onClickMudaTelaDetalhes}
          onClickCriar={this.onClickMudaTelaCriar}
        />
      case "detalhesPlaylists":
        return <TelaDetalhesPlaylists
          idPlaylist={this.state.idPlaylistEscolhida}
          namePlaylist={this.state.namePlaylistEscolhida}
          onClickEditar={this.onClickMudaTelaEditar}
        />
      case "editarPlaylists":
        return <TelaEditarPlaylists idPlaylist={this.state.idPlaylistEscolhida} />
      case "criarPlaylists":
        return <TelaCriarPlaylists />
      default:
        return <TelaListaPlaylists
          listaPlaylists={this.state.playlists}
          mudaTelaDetalhes={this.onClickMudaTelaDetalhes}
          onClickCriar={this.onClickMudaTelaCriar}
        />
    }
  } 

  // Funções de mudança entre telas
  onClickMudaTelaLista = () => {
    this.setState({telaAtual: "listaPlaylists"})
  }
  onClickMudaTelaDetalhes = (id, name) => {
    this.setState({telaAtual: "detalhesPlaylists", idPlaylistEscolhida: id, namePlaylistEscolhida: name})
  }
  onClickMudaTelaEditar = () => {
    this.setState({telaAtual: "editarPlaylists"})
  }
  onClickMudaTelaCriar = () => {
    this.setState({telaAtual: "criarPlaylists"})
  }

  render() {

    return <div>
      <header>
        <h1 onClick={this.onClickMudaTelaLista}>Labefy</h1>
        </header>
      {this.mudaTela()}
      <br />
      {/* <button onClick={this.onClickMudaTelaLista}>Lista</button> */}
      {/* <button onClick={this.onClickMudaTelaDetalhes}>Detalhes</button> */}
      {/* <button onClick={this.onClickMudaTelaCriar}>Criar</button> */}
      {/* <button onClick={this.onClickMudaTelaEditar}>Editar</button> */}
      <footer><p>Labefy ©️ 2022</p></footer>
    </div>
  }
}
export default App;
