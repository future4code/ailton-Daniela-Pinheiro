import React from "react"
import axios from "axios"
import { url_base } from "../../constants/urls"
import { CardPersonagem } from "./ListaPersonagens-styled"

export default class ListaPersonagens extends React.Component {
    state = {
        listaPersonagens: [],
    }

    componentDidMount() {
        this.pegarPersonagens()
    }

    pegarPersonagens = () => {
        axios.get(`${url_base}/people/`)
        .then((response) => {
            this.setState({listaPersonagens: response.data.results})
        })
        .catch((error) => {
            console.log(error.response)
        })
    }

    render() {
        const personagens = this.state.listaPersonagens.map((pessoa) => {
            return <CardPersonagem key={pessoa.url}>{pessoa.name}</CardPersonagem>
        })

        return <div>
            {personagens}
        </div>
    }
}