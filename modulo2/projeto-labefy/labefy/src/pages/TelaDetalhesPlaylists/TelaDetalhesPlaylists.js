import React from "react"
import { Botao } from "../../constants/button"
import { ContainerDetalhe, CardDetalhePlaylist } from "./TelaDetalhesPlaylists-styled"
import { getPlaylistTracks } from "../../services/requisicoes"

export default class TelaDetalhesPlaylists extends React.Component {
    state = {
        musicas: [],
    }

    componentDidMount () {
        getPlaylistTracks(this.props.idPlaylist, this.salvarMusicas)
    }

    // Função para salvar as músicas da requisição
    salvarMusicas = (dados) => {
        this.setState({musicas: dados})
    }

    render() {
        const musicasPlaylist = this.state.musicas.map((item) => {
            return <CardDetalhePlaylist key={item.id}>
                <p><strong>{item.name}</strong></p>
                <p>/ {item.artist}</p>
                <audio src={item.url} controls/>                
            </CardDetalhePlaylist>
        })

        return <>
            <h2>{this.props.namePlaylist}</h2>
            <ContainerDetalhe>
                {musicasPlaylist}
            </ContainerDetalhe>
            <Botao onClick={this.props.onClickEditar}>Adicionar mais músicas</Botao>
        
        </>
    }
}