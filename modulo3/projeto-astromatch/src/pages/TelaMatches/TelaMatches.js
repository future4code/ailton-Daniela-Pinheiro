import React, { useState, useEffect } from 'react'
import { ContainerMatches, Match } from './TelaMatches-styled'
import { getMatches } from '../../services/requisicoes'


export default function TelaMatches() {

    // Estado
    const [listaMatches, setListaMatches] = useState([])

    // Ciclo de vida
    useEffect(() => {
        // Chama a requisição e salva o resultado no estado "listaMatches" quando a tela é renderizada
        getMatches(setListaMatches)
    }, [])

    // Se "listaMatches" não estiver vazio, renderiza em lista seu conteúdo
    const matches = listaMatches && listaMatches.map((pessoa) => {
        return <Match key={pessoa.id}>
            <img src={pessoa.photo} alt={pessoa.photo_alt} />
            <li>{pessoa.name}</li>
            </Match>
    })

    return <ContainerMatches>
        {matches}
    </ContainerMatches>
}