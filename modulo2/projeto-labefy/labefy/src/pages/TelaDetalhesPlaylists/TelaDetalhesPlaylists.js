import React from "react"
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
            return <div key={item.id}>
                <p>{item.name} / {item.artist}</p>
                <audio src={item.url} controls/>                
            </div>
        })

        return <div>
            <h3>{this.props.namePlaylist}</h3>
            {musicasPlaylist}
            <button onClick={this.props.onClickEditar}>Adicionar nova música</button>
        </div>
    }
}