import React from 'react'
import { decideCandidate } from '../../services/requests'
import { CardCandidates, ButtonCandidates, ContainerButtons } from './CardCandidatesToApprove-styled'

export default function CardCandidatesToApprove(props) {
    // Informações da viagem específica
    const data = props.data

    // Funções de aprovar ou rejeitar candidatos
    const onClickApprove = (candidateId) => {
        // Requisição
        decideCandidate(true, props.id, candidateId)
    }
    const onClickReject = (candidateId) => {
        // Requisição
        decideCandidate(false, props.id, candidateId)
    }
    // Renderização das informações dos candidatos a serem aprovados/rejeitados
    const candidates = data.trip && data.trip.candidates.map((candidate) => {
        return <CardCandidates key={candidate.id}>
            <p><strong>Nome:</strong> {candidate.name}</p>
            <p><strong>Idade:</strong> {candidate.age}</p>
            <p><strong>Profissão:</strong> {candidate.profession}</p>
            <p><strong>Mensagem:</strong> {candidate.applicationText}</p>
            <ContainerButtons>
                <ButtonCandidates onClick={() => onClickApprove(candidate.id)}>Aprovar</ButtonCandidates>
                <ButtonCandidates onClick={() => onClickReject(candidate.id)}>Recusar</ButtonCandidates>
            </ContainerButtons>
        </CardCandidates>
    })

    return candidates
}