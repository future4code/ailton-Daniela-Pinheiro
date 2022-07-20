import React from 'react'
import { useRequestData } from '../../hooks/useRequestData'
import { CardTrips, TitleTrips, CardText } from './CardListTrips-styled'

export default function CardListTrips() {
    // Requisição para pegar informações das viagens
    const [data, isLoading, error] = useRequestData("trips", "")
    // Renderização das informações das viagens
    const tripsList = data.trips && data.trips.map((trip) => {
        return <CardTrips key={trip.id}>
            <TitleTrips>{trip.name}</TitleTrips>
            <p><strong>Descrição:</strong> {trip.description}</p>
            <p><strong>Planeta:</strong> {trip.planet}</p>
            <p><strong>Duração:</strong> {trip.durationInDays} dias</p>
            <p><strong>Data:</strong> {trip.date}</p>  
        </CardTrips>
    })

    return <>
        {isLoading && <CardText>Carregando...</CardText>}
        {!isLoading && error && <CardText>Ocorreu um erro</CardText>}
        {!isLoading && !data && <CardText>Não há nenhuma viagem marcada.</CardText>}
        {!isLoading && data && tripsList}
    </>
}