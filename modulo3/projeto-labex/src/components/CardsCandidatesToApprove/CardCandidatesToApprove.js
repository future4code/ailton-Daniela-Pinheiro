import React from 'react'
import { CardCandidates } from './CardsCandidatesToApprove-styled'
import axios from 'axios'
import { base_url } from '../../constants/url'
import { headers } from '../../constants/headers'

export default function CardCandidatesToApprove(props) {
    const refreshPage = () => {
        window.location.reload(true)
    }

    const data = props.data

    const decideCandidate = (decision, candidateId) => {
        const body = {
            approve: decision
        }
        axios.put(`${base_url}/trips/${props.id}/candidates/${candidateId}/decide`, body, headers)
        .then(() => {
            refreshPage()
        }).catch(() => {
            alert("Ocorreu um erro. Tente novamente mais tarde.")
        })
    }

    const onClickApprove = (candidateId) => {
        decideCandidate(true, candidateId)
    }
    const onClickReject = (candidateId) => {
        decideCandidate(false, candidateId)
    }

    const candidates = data.trip && data.trip.candidates.map((candidate) => {
        return <CardCandidates key={candidate.id}>
            <p><strong>Nome:</strong> {candidate.name}</p>
            <p><strong>Idade:</strong> {candidate.age}</p>
            <p><strong>Profissão:</strong> {candidate.profession}</p>
            <p><strong>Mensagem:</strong> {candidate.applicationText}</p>
            <div>
                <button onClick={() => onClickApprove(candidate.id)}>Aprovar</button>
                <button onClick={() => onClickReject(candidate.id)}>Recusar</button>
            </div>
        </CardCandidates>
    })

    return candidates
}