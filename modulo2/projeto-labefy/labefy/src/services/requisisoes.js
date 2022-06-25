import axios from 'axios'
import { url_base } from './constants/url.js'

// Requisição pegar todas as playlists (App)
export const getAllPlaylists = () => {
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

// Requisição deletar playlist (DeletarPlaylist)
export const deletePlaylist = () => {
    axios.delete(`${url_base}/${this.props.idPlaylist}`, {
        headers: {
            Authorization: 'daniela-pinheiro-ailton'
        }
    }).then(() => {
        alert("Playlist deletada.")
    }).catch((error) => {
        console.log(error.response)
    })
}


// Requisição criar playlist (TelaCriarPlaylists)
export const createPlaylist = () => {
    const body = {
        "name": this.state.inputNomePlaylist
    }
    axios.post(url_base, body, {
        headers: {
          Authorization: 'daniela-pinheiro-ailton'
        }
    }).then(() => {
        alert("Playlist criada! Volte à lista para vizualizar.")
    }).catch(() => {
        alert("Ops, ocorreu um erro. Verifique se já existe uma playlist com o nome digitado.")
    })
    // Limpa o input
    this.setState({inputNomePlaylist: ""})
}

// Requisição pegar músicas da playlist (TelaDetalhesPlaylists)
export const getPlaylistTracks = () => {
    axios.get(`${url_base}/${this.props.idPlaylist}/tracks`, {
        headers: {
            Authorization: 'daniela-pinheiro-ailton'
        }
    }).then((response) => {
        this.setState({musicas: response.data.result.tracks})
    }).catch((error) => {
        console.log(error.response)
    })
}

// Requisição editar playlist (TelaEditarPlaylists)
export const addTrackToPlaylist = () => {
    const body = {
        "name": this.state.inputMusica,
        "artist": this.state.inputArtista,
        "url": this.state.inputUrl
    }
    axios.post(`${url_base}/${this.props.idPlaylist}/tracks`, body, {
        headers: {
          Authorization: 'daniela-pinheiro-ailton'
        }
    }).then(() => {
        alert("Nova música adicionada à playlist! Volte aos detalhes da playlist para vizualizar.")
    }).catch(() => {
        alert("Ops, ocorreu um erro. Verifique se inseriu todos os dados corretamente.")
    })
    // Limpa o input
    this.setState({inputMusica: "", inputArtista: "", inputUrl: ""})
}