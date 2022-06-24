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

     // Requisições
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
                <p>Música: {item.name}</p>
                <p>Artista: {item.artist}</p>
                <audio src="http://spoti4.future4.com.br/1.mp3" controls/>
                {/* trocar por {item.url} */}
            </div>
        })

        return <div>
            <h3>{this.props.namePlaylist}</h3>
            {musicasPlaylist}
        </div>
    }
}