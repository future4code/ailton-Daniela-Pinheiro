import React, { useState, useEffect } from 'react'
import { getMatches } from '../services/requisicoes'


export default function TelaMatches(props) {
    const [listaMatches, setListaMatches] = useState([])

    useEffect(() => {
        getMatches(setListaMatches)
    }, [])


    const matches = listaMatches && listaMatches.map((pessoa) => {
        return <p key={pessoa.id}>{pessoa.name}</p>
    })

    return <div>
        <p>Tela Matches</p>
        {matches}
        <button onClick={props.mudaTelaInicial}>Inicial</button>
    </div>
}