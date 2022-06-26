import axios from 'axios'
import { url_base } from '../constants/url'

// Requisição pegar todas as playlists (App)
export const getAllPlaylists = (salvar) => {
    axios.get(url_base, {
      headers: {
        Authorization: 'daniela-pinheiro-ailton'
      }
    }).then((response) => {
      salvar(response.data.result.list)
    }).catch((error) => {
      console.log(error.response)
    })
}

// Requisição deletar playlist (DeletarPlaylist)
export const deletePlaylist = (id) => {
    axios.delete(`${url_base}/${id}`, {
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
export const createPlaylist = (nome, salvar) => {
    const body = {
        "name": nome
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
    salvar("")
}

// Requisição pegar músicas da playlist (TelaDetalhesPlaylists)
export const getPlaylistTracks = (id, salvar) => {
    axios.get(`${url_base}/${id}/tracks`, {
        headers: {
            Authorization: 'daniela-pinheiro-ailton'
        }
    }).then((response) => {
        salvar(response.data.result.tracks)
    }).catch((error) => {
        console.log(error.response)
    })
}

// Requisição editar playlist (TelaEditarPlaylists)
export const addTrackToPlaylist = (musica, artista, url, id, salvar) => {
    const body = {
        "name": musica,
        "artist": artista,
        "url": url
    }
    axios.post(`${url_base}/${id}/tracks`, body, {
        headers: {
          Authorization: 'daniela-pinheiro-ailton'
        }
    }).then(() => {
        alert("Nova música adicionada à playlist! Volte aos detalhes da playlist para vizualizar.")
    }).catch(() => {
        alert("Ops, ocorreu um erro. Verifique se inseriu todos os dados corretamente.")
    })
    // Limpa o input
    salvar("")
}