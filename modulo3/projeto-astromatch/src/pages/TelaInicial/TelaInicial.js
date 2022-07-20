import React, { useState, useEffect } from 'react'
import { ContainerPerfil, CardPerfil, FotoFundo, Foto, Texto, Botoes } from './TelaInicial-styled'
import { getProfileToChoose, choosePerson } from '../../services/requisicoes'
import iconeRejeitar from '../../assets/img/icone-rejeitar.png'
import iconeGostar from '../../assets/img/icone-gostar.png'

export default function TelaInicial() {
    
    // Estados
    const [perfil, setPerfil] = useState([])
    const [clicou, setClicou] = useState(false)

    // Ciclo de vida
    useEffect(() => {
        // Chama a requisição e salva o objeto no estado "perfil"
        // Se o estado "clicou" mudar (quando o usuário clica em algum dos dois botões inferiores),
        // chama novamente a requisição
        getProfileToChoose(setPerfil)
    }, [clicou])

    const clicar = (id, escolha) => {
        // Chama a requisição e muda o estado de "clicou" para true
        choosePerson(id, escolha, setClicou)

        // Muda novamente o estado de "clicou", para que sempre apareçam mais perfis a serem escolhidos
        setClicou(false)
    }

    const mostraPerfil = () => {
        // Se o estado "perfil" contém um objeto, renderiza esse objeto
        if(perfil) {
            return <CardPerfil>
                <FotoFundo src={perfil.photo} alt={perfil.photo_alt} />
                <Foto src={perfil.photo} alt={perfil.photo_alt} />
                <Texto>
                    <h3>{perfil.name}, {perfil.age}</h3>
                    <p>{perfil.bio}</p>
                </Texto>
                <Botoes>
                    <img src={iconeRejeitar} alt={"Rejeitar"} onClick={() => clicar(perfil.id, false)} /> 
                    <img src={iconeGostar} alt={"Gostar"} onClick={() => clicar(perfil.id, true)} />
                </Botoes>
            </CardPerfil>
        // Se não, mostra uma mensagem
        } else {
           return <p>Parece que não tem mais ninguém por perto...</p> 
        } 
    }

    return <ContainerPerfil>
        {mostraPerfil()}
    </ContainerPerfil>
}