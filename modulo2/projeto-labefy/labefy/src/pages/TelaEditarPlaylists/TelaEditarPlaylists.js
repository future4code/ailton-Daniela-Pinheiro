import React from "react"
import axios from 'axios'
import { url_base } from "../../constants/url" 

export default class TelaEditarPlaylists extends React.Component {
    state = {
        inputMusica: "",
        inputArtista: "",
        inputUrl: "",
    }
    onChangeMusica = (event) => {
        this.setState({inputMusica: event.target.value})
    }
    onChangeArtista = (event) => {
        this.setState({inputArtista: event.target.value})
    }
    onChangeUrl = (event) => {
        this.setState({inputUrl: event.target.value})
    }

    // Requisição editar playlist
    addTrackToPlaylist = () => {
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
    }


    render() {
    
        return <div>
            <input
                onChange={this.onChangeMusica}
                value={this.state.inputMusica}
                placeholder="Nome da Música"
            />
            <input
                onChange={this.onChangeArtista}
                value={this.state.inputArtista}
                placeholder="Nome do Artista"
            />
            <input
                onChange={this.onChangeUrl}
                value={this.state.inputUrl}
                placeholder="Url do Aqruivo da Música"
            />
            <button onClick={this.addTrackToPlaylist}>Enviar</button>
        </div>
    }
}