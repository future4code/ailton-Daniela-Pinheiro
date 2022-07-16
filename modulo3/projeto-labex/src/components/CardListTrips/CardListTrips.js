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
        {isLoading && <CardListTrips>Carregando...</CardListTrips>}
        {!isLoading && error && <CardListTrips>Ocorreu um erro</CardListTrips>}
        {!isLoading && !data && <CardListTrips>Não há nenhuma viagem marcada.</CardListTrips>}
        {!isLoading && data && tripsList}
    </>
}