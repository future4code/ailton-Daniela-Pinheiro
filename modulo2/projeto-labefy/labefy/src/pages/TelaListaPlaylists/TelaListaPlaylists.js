import React from "react"
import { ContainerLista, CardPlaylist, IconePlaylist } from "./TelaListaPlaylists-styled"
import playlistIcone from "../../assets/icon_playlist.png"
import DeletarPlaylist from "../../components/DeletarPlaylist/DeletarPlaylist"

export default class TelaListaPlaylists extends React.Component {
    render() {
        const listaPlaylists = this.props.listaPlaylists.map((item) => {
            return <CardPlaylist key={item.id}>
                <IconePlaylist src={playlistIcone} />
                <h4 onClick={() => this.props.mudaTelaDetalhes(item.id, item.name)}>{item.name}</h4>
                <DeletarPlaylist idPlaylist={item.id}/>
            </CardPlaylist>
        })

        return <>
            <h2>Suas Playlists</h2>
            <ContainerLista>
                {listaPlaylists}
            </ContainerLista>
        </>
    }
}