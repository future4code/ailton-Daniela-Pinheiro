import React, {useState, useEffect} from 'react'
import { getTrips } from '../../services/requests'
import { CardTrips } from './CardListTrips-styled'

export default function CardListTrips() {
    const [trips, setTrips] = useState([])
    
    useEffect(() => {
        getTrips(setTrips)
    }, [])

    const tripsList = trips && trips.map((trip) => {
        return <CardTrips key={trip.id}>
            <h3>{trip.name}</h3>
            <div>
              <p><strong>Descrição:</strong> {trip.description}</p>
            <p><strong>Planeta:</strong> {trip.planet}</p>
            <p><strong>Duração:</strong> {trip.durationInDays} dias</p>
            <p><strong>Data:</strong> {trip.date}</p>  
            </div>
            
        </CardTrips>
    })
    return tripsList
}