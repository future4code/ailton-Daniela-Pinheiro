import axios from "axios"
import React from "react"
import { CardDetalhes } from "./DetalhesPersonagens-styled"
import { pegarPlaneta, pegarPersonagem } from "../../services/requests"


export default class DetalhesPersonagens extends React.Component {
    state = {
        personagem: {},
        planeta: "",
    }

    componentDidMount() {
        pegarPersonagem(this.props.url, this.salvarPersonagem)
    }
    componentDidUpdate(prevState) {
        if(this.state.personagem !== prevState.personagem) {
            pegarPlaneta(this.state.personagem.homeworld, this.salvarPlaneta)
        }
    }

    salvarPersonagem = (dados) => {
        this.setState({personagem: dados})
    }
    salvarPlaneta = (dados) => {
        this.setState({planeta: dados})
    }

    render() {
        return <CardDetalhes>
            {this.state.personagem && this.state.planeta ?
            <div>
                <p>Nome: {this.state.personagem.name}</p>
                <p>Planeta: {this.state.planeta}</p>
            </div> :
            <p>Carregando...</p>
            }
            <button onClick={this.props.irParaLista}>Voltar</button>
        </CardDetalhes>
    }
}