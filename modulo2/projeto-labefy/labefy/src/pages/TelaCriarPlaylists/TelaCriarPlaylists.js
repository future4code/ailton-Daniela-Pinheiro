import React from "react"
import { Botao } from "../../constants/button"
import { Input } from "../../constants/input"
import { ContainerCriar, CaixaTexto } from "./TelaCriarPlaylists-styled"
import { createPlaylist } from "../../services/requisicoes"


export default class TelaCriarPlaylists extends React.Component {
    state = {
        inputNomePlaylist: "",
    }
    onChangeNomePlaylist = (event) => {
        this.setState({inputNomePlaylist: event.target.value})
    }

    // Função para limpar o input após a requisição
    limparInput = (dados) => {
        this.setState({inputNomePlaylist: dados})
    }

    render() {
    
        return <ContainerCriar>
            <h2>Criar Nova Playlist</h2>
            
            <CaixaTexto>
                <Input
                    onChange={this.onChangeNomePlaylist}
                    value={this.state.inputNomePlaylist}
                    placeholder="Nome da Playlist"
                />
                <Botao onClick={() => createPlaylist(this.state.inputNomePlaylist, this.limparInput)}>Enviar</Botao>
            </CaixaTexto>

            <p>Lembre-se que cada playlist deve ter um nome único.</p>
        </ContainerCriar>
    }
}