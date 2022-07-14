import React from 'react'
import { useRequestData } from '../../hooks/useRequestData'
import { CardTrips, TitleTrips } from './CardListTrips-styled'

export default function CardListTrips() {

    const [data, isLoading, error] = useRequestData("trips", "")

    const tripsList = data.trips && data.trips.map((trip) => {
        return <CardTrips key={trip.id}>
            <TitleTrips>{trip.name}</TitleTrips>
            <div>
                <p><strong>Descrição:</strong> {trip.description}</p>
                <p><strong>Planeta:</strong> {trip.planet}</p>
                <p><strong>Duração:</strong> {trip.durationInDays} dias</p>
                <p><strong>Data:</strong> {trip.date}</p>  
            </div> 
        </CardTrips>
    })

    return <>
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>Ocorreu um erro</p>}
        {!isLoading && !data && <p>Não há nenhuma viagem marcada.</p>}
        {!isLoading && data && tripsList}
    </>
}