import React from 'react'
import {ContainerPrincipal, Cabecalho, Icone, MenuLateral, Principal, Rodape} from './App-styled'
import icone from './assets/icon.png'
import TelaListaPlaylists from './pages/TelaListaPlaylists/TelaListaPlaylists'
import TelaDetalhesPlaylists from './pages/TelaDetalhesPlaylists/TelaDetalhesPlaylists'
import TelaCriarPlaylists from './pages/TelaCriarPlaylists/TelaCriarPlaylists'
import TelaEditarPlaylists from './pages/TelaEditarPlaylists/TelaEditarPlaylists'
import { getAllPlaylists } from './services/requisicoes'

class App extends React.Component {
  state = {
    telaAtual: "listaPlaylists",
    playlists: [],
    idPlaylistEscolhida: "",
    namePlaylistEscolhida: "",
  }

  // Funções de ciclo de vida
  componentDidMount() {
    getAllPlaylists(this.salvarPlaylists)
  }
  componentDidUpdate(prevState) {
    if(this.state.playlists !== prevState.playlists) {
      getAllPlaylists(this.salvarPlaylists)
    }
  }

  // Função para a requisição de playlists
  salvarPlaylists = (dados) => {
    this.setState({playlists: dados})
  }

  // Funções de renderização condicional de telas
  mudaTela = () => {
    switch (this.state.telaAtual) {
      case "listaPlaylists":
        return <TelaListaPlaylists
          listaPlaylists={this.state.playlists}
          mudaTelaDetalhes={this.onClickMudaTelaDetalhes}
        />
      case "detalhesPlaylists":
        return <TelaDetalhesPlaylists
          idPlaylist={this.state.idPlaylistEscolhida}
          namePlaylist={this.state.namePlaylistEscolhida}
          onClickEditar={this.onClickMudaTelaEditar}
        />
      case "editarPlaylists":
        return <TelaEditarPlaylists
          idPlaylist={this.state.idPlaylistEscolhida}
          playlistNome={this.state.namePlaylistEscolhida}
        />
      case "criarPlaylists":
        return <TelaCriarPlaylists />
      default:
        return <TelaListaPlaylists
          listaPlaylists={this.state.playlists}
          mudaTelaDetalhes={this.onClickMudaTelaDetalhes}
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
    return <ContainerPrincipal>
      <Cabecalho>
        <Icone src={icone} />
        <h1>Labefy</h1>
      </Cabecalho>

      <MenuLateral>
        <h3 onClick={this.onClickMudaTelaLista}>Todas as playlists</h3>
        <h3 onClick={this.onClickMudaTelaCriar}>Criar playlist</h3>
      </MenuLateral>

      <Principal>
        {this.mudaTela()}
      </Principal>

      <Rodape>
        <p>Labefy ©️ 2022</p>
      </Rodape>
    </ContainerPrincipal>
  }
}
export default App;
