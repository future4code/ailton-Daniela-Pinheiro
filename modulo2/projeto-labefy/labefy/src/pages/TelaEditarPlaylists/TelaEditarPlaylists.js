import React from "react"
import { ContainerEditar, Formulario } from "./TelaEditarPlaylists-styled"
import { Botao } from "../../constants/button"
import { Input } from "../../constants/input"

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
        // Limpa o input
        this.setState({inputMusica: "", inputArtista: "", inputUrl: ""})
    }


    render() {
    
        return <ContainerEditar>
            <h2>Adicionar Nova Faixa a "{this.props.playlistNome}"</h2>
            <Formulario>
                <Input
                    onChange={this.onChangeMusica}
                    value={this.state.inputMusica}
                    placeholder="Nome da Música"
                />
                <Input
                    onChange={this.onChangeArtista}
                    value={this.state.inputArtista}
                    placeholder="Nome do Artista"
                />
                <Input
                    onChange={this.onChangeUrl}
                    value={this.state.inputUrl}
                    placeholder="Url do Aqruivo da Música"
                />
                <Botao onClick={this.addTrackToPlaylist}>Enviar</Botao>
            </Formulario>
            <p>Certifique-se de preencher corretamente todas as informações antes de enviar.</p>
        </ContainerEditar>
    }
}