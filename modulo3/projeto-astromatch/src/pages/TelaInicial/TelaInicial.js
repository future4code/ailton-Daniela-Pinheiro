import React, { useState, useEffect } from 'react'
import { CardPerfil } from './TelaInicial-styled'
import { getProfileToChoose, choosePerson } from '../../services/requisicoes'

export default function TelaInicial(props) {
    
    const [perfil, setPerfil] = useState([])
    const [clicou, setClicou] = useState(false)

    useEffect(() => {
        getProfileToChoose(setPerfil)
    }, [clicou])

    const clicar = (id, escolha) => {
        choosePerson(id, escolha, setClicou)
        setClicou(false)
    }

    const mostraPerfil = () => {
        if(perfil) {
            return <CardPerfil>
                <img src={perfil.photo} />
                <p><strong>{perfil.name}</strong>, {perfil.age}</p>
                <p>{perfil.bio}</p>
                <button onClick={() => clicar(perfil.id, false)} > X </button> 
                <button onClick={() => clicar(perfil.id, true)} > S2 </button> 
            </CardPerfil>
        }else {
           return <p>Carregando...</p> 
        } 
    }

    return <>
        {mostraPerfil()}
        <button onClick={props.mudaTelaMatches}>Matches</button>
    </>
}