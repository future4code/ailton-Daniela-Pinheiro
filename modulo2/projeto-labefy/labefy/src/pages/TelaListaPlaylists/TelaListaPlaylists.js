import React from "react"

export default class TelaListaPlaylists extends React.Component {
    render() {
        const listaPlaylists = this.props.listaPlaylists.map((item) => {
            return <div key={item.id} onClick={() => this.props.mudaTelaDetalhes(item.id, item.name)}>
                <p>{item.name}</p>
                <button>Deletar</button>
            </div>
        })

        return <div>{listaPlaylists}</div>
    }
}