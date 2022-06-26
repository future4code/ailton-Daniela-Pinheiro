import React from "react"
import { Botao } from "../../constants/button"
import { deletePlaylist } from "../../services/requisicoes"

export default class DeletarPlaylist extends React.Component {
    confirmacaoDeletar = () => {
        if(window.confirm("Tem certeza que deseja deletar esta playlist? Não será possível recuperá-la.")) {
            return deletePlaylist(this.props.idPlaylist)
        }
    }

    render() {
        return <Botao onClick={this.confirmacaoDeletar}>Deletar</Botao>
    }
}