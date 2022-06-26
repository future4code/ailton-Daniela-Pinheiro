import React from "react"
import styled from "styled-components"
import DeletarPlaylist from "../../components/DeletarPlaylist/DeletarPlaylist"

const Card = styled.div`
border: 1px solid white;
`

export default class CardPlaylist extends React.Component {
    render() {
        const listaPlaylists = this.props.listaPlaylists.map((item) => {
            return <Card key={item.id}>
                <p onClick={() => this.props.mudaTelaDetalhes(item.id, item.name)}>{item.name}</p>
                <DeletarPlaylist idPlaylist={item.id}/>
            </Card>
        })

        return {listaPlaylists}
    }
}