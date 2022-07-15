import React from 'react'
import { ContainerDetails, ContainerButtons } from './TripDetailsPage-styled'
import { useParams, useNavigate } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useRequestData } from '../../hooks/useRequestData'
import { goBack } from '../../routes/coordinator'
import { Button } from '../../constants/Button'
import { headers } from '../../constants/headers'

export default function TripDetailsPage() {
    useProtectedPage()

    const pathParams = useParams()
    const navigate = useNavigate()

    const [data, isLoading, error] = useRequestData("trip", pathParams.id, headers)

    const tripDetails = () => {
        const candidates = data.trip && data.trip.candidates.map((candidate) => {
            return <p>{candidate.name}</p>
        })
        const approved = data.trip && data.trip.approved.map((candidate) => {
            return <p>{candidate.name}</p>
        })
        
       return <div>
        <h2>{data.trip && data.trip.name}</h2>
        {/* <p>{data.trip && data.trip.planet}</p> */}
        <p>Data: {data.trip && data.trip.date}</p>

        <p>Candidatos aprovados: {approved}</p>
        <p>Candidatos inscritos: {candidates}</p>

       </div>
    } 

    return <ContainerDetails>
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>Ocorreu um erro</p>}
        {!isLoading && !data && <p>Não há nenhuma viagem com essa id...</p>}
        {!isLoading && data && tripDetails()} 

        <ContainerButtons>
            <Button onClick={() => goBack(navigate)}>Voltar</Button>
        </ContainerButtons>
    </ContainerDetails>
}