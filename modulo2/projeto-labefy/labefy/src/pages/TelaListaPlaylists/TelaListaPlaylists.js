import React from "react"
import DeletarPlaylist from "../../components/DeletarPlaylist/DeletarPlaylist"

export default class TelaListaPlaylists extends React.Component {
    render() {
        const listaPlaylists = this.props.listaPlaylists.map((item) => {
            return <div key={item.id}>
                <p onClick={() => this.props.mudaTelaDetalhes(item.id, item.name)}>{item.name}</p>
                <DeletarPlaylist idPlaylist={item.id}/>
            </div>
        })

        return <div>
            <div>{listaPlaylists}</div>
            <button onClick={this.props.onClickCriar}>Criar nova playlist</button>
        </div>
    }
}