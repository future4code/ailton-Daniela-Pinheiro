import React from "react"
import { Botao } from "../../constants/button"
import { ContainerDetalhe, CardDetalhePlaylist } from "./TelaDetalhesPlaylists-styled"

import axios from 'axios'
import { url_base } from "../../constants/url" 

export default class TelaDetalhesPlaylists extends React.Component {
    state = {
        musicas: [],
    }

    componentDidMount () {
        this.getPlaylistTracks()
    }

    // Requisição pegar músicas da playlist
    getPlaylistTracks = () => {
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