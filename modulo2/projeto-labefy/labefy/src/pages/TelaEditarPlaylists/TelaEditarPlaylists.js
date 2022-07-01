import React from "react"
import { ContainerEditar, Formulario } from "./TelaEditarPlaylists-styled"
import { Botao } from "../../constants/button"
import { Input } from "../../constants/input"
import { addTrackToPlaylist } from "../../services/requisicoes"

export default class TelaEditarPlaylists extends React.Component {
    state = {
        inputMusica: "",
        inputArtista: "",
        inputUrl: "",
    }

    // Funções de input controlado
    onChangeMusica = (event) => {
        this.setState({inputMusica: event.target.value})
    }
    onChangeArtista = (event) => {
        this.setState({inputArtista: event.target.value})
    }
    onChangeUrl = (event) => {
        this.setState({inputUrl: event.target.value})
    }

    // Função para limpar os inputs
    limpaInputs = (dados) => {
        this.setState({inputMusica: dados, inputArtista: dados, inputUrl: dados})
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
                <Botao
                    onClick={() => addTrackToPlaylist(
                        this.state.inputMusica,
                        this.state.inputArtista,
                        this.state.inputUrl,
                        this.props.idPlaylist,
                        this.limpaInputs)}
                >Enviar</Botao>
            </Formulario>
            <p>Certifique-se de preencher corretamente todas as informações antes de enviar.</p>
        </ContainerEditar>
    }
}