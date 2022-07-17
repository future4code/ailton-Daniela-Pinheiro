import React from 'react'
import { CardCandidates, ButtonCandidates, ContainerButtons } from './CardCandidatesToApprove-styled'
import { decideCandidate } from '../../services/requests'

export default function CardCandidatesToApprove(props) {
    const data = props.data

    const onClickApprove = (candidateId) => {
        decideCandidate(true, props.id, candidateId)
    }
    const onClickReject = (candidateId) => {
        decideCandidate(false, props.id, candidateId)
    }

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