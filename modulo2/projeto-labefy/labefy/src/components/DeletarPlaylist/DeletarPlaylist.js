import React from "react"
import axios from 'axios'
import { url_base } from "../../constants/url" 

export default class DeletarPlaylist extends React.Component {

    // Requisição deletar playlist
    deletePlaylist = () => {
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

    render() {


        return <button onClick={this.deletePlaylist}>Deletar</button>
    }
}