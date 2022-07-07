import React, { useState, useEffect } from 'react'
import { ContainerMatches, Match } from './TelaMatches-styled'
import { getMatches } from '../../services/requisicoes'


export default function TelaMatches() {
    const [listaMatches, setListaMatches] = useState([])

    useEffect(() => {
        getMatches(setListaMatches)
    }, [])


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