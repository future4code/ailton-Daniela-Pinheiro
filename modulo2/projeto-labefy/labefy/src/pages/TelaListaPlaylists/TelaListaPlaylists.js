import React from "react"

export default class TelaListaPlaylists extends React.Component {
    render() {
        const listaPlaylists = this.props.listaPlaylists.map((item) => {
            return <li key={item.id} onClick={this.props.detalhesPlaylists}>{item.name}</li>
        })

        return <div>{listaPlaylists}</div>
    }
}