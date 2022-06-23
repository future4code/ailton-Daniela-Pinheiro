import React from "react"
import { CardPersonagem } from "./ListaPersonagens-styled"
import { pegarListaPersonagens } from "../../services/requests"

export default class ListaPersonagens extends React.Component {
    state = {
        listaPersonagens: [],
    }

    componentDidMount() {
        pegarListaPersonagens(this.salvarListaPersonagens)
    }

    salvarListaPersonagens = (dados) => {
        this.setState({listaPersonagens: dados})
    }

    render() {
        const personagens = this.state.listaPersonagens.map((pessoa) => {
            return <CardPersonagem
                key={pessoa.url}
                onClick={() => this.props.irParaDetalhes(pessoa.url)}
            >
                {pessoa.name}
            </CardPersonagem>
        })

        return <div>
            {personagens}
        </div>
    }
}