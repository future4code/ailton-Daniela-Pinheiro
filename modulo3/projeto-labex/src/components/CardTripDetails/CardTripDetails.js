import React from 'react'
import { CardCandidates, CardDetails, TitleDetails } from './CardTripDetails-styled'
import CardCandidatesToApprove from '../CardCandidatesToApprove/CardCandidatesToApprove'

export default function CardTripDetails(props) {
    const tripDetails = () => {
        // Informações da viagem específica
        const data = props.data
        // Renderização em lista dos candidatos aprovados
        const approved = data.trip && data.trip.approved.map((candidate) => {
            return <li>{candidate.name}</li>
        })
        
       return <>
        <h2>{data.trip && data.trip.name}</h2>
        
        <CardDetails>
            <p><strong>Descrição:</strong> {data.trip && data.trip.description}</p>
            <p><strong>Planeta:</strong> {data.trip && data.trip.planet}</p>
            <p><strong>Duração:</strong> {data.trip && data.trip.durationInDays} dias</p>
            <p><strong>Data:</strong> {data.trip && data.trip.date}</p>
        </CardDetails>

        <TitleDetails>Candidatos aprovados</TitleDetails>
        <CardCandidates>
            {approved}
        </CardCandidates>

        <TitleDetails>Candidatos inscritos</TitleDetails>
        <CardCandidatesToApprove data={data} isLoading={props.isLoading} id={props.id} />
       </>
    } 

    return tripDetails()
}