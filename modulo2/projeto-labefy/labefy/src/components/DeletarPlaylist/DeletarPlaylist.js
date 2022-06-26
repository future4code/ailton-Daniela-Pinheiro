import React from "react"
import { Botao } from "../../constants/button"

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


        return <Botao onClick={this.deletePlaylist}>Deletar</Botao>
    }
}