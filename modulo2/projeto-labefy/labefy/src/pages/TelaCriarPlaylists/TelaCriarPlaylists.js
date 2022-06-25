import React from "react"
import axios from 'axios'
import { url_base } from "../../constants/url" 

export default class TelaCriarPlaylists extends React.Component {
    state = {
        inputNomePlaylist: "",
    }
    onChangeNomePlaylist = (event) => {
        this.setState({inputNomePlaylist: event.target.value})
    }

    // Requisição criar playlist
    createPlaylist = () => {
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

    render() {
    
        return <div>
            <input
                onChange={this.onChangeNomePlaylist}
                value={this.state.inputNomePlaylist}
                placeholder="Nome da Playlist"
            />
            <button onClick={this.createPlaylist}>Enviar</button>
        </div>
    }
}