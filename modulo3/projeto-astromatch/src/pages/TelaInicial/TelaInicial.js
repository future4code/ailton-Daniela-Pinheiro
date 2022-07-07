import React, { useState, useEffect } from 'react'
// import { CardPerfil } from './TelaInicial-styled'
import CardPerfil from '../../components/CardPerfil'
import axios from 'axios'
import { url_base } from '../../constants/url'

export default function TelaInicial(props) {
    
    const [perfil, setPerfil] = useState([])
    const[loading, setLoading] = useState("false")

    useEffect(() => {
        const getProfileToChoose = async () => {
            try {
                setLoading("true")
                const response = await axios.get(`${url_base}/person`)
                setPerfil(response.data.profile)

                setLoading("false")
            } catch(error) {
                console.log(error)
            }
        }
        getProfileToChoose()
    }, [])

    const renderiza = () => {
        if(loading === "false") {
            return <CardPerfil foto={perfil.photo} nome={perfil.name} idade={perfil.age} bio={perfil.bio} mudaTelaMatches={props.mudaTelaMatches} />
        } else {
            return <p>Carregando...</p>
        }
    }

    return <>
        {renderiza()}    
    </>
}