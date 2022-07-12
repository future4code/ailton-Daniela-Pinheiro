import React, {useState, useEffect} from 'react'
import { getTrips } from '../services/requests'

import styled from 'styled-components'

const CardTrips = styled.div`
/* border: 1px solid blue; */
border-radius: 8px;
width: 50%;
height: 100px;
margin: 4px 0;
padding: 8px;
background-color: white;
`

export default function CardListTrips() {
    const [trips, setTrips] = useState([])
    
    useEffect(() => {
        getTrips(setTrips)
    }, [])

    const tripsList = trips && trips.map((trip) => {
        return <CardTrips key={trip.id}>
            <h3>{trip.name}</h3>
            <p>{trip.description}</p>
        </CardTrips>
    })
    return tripsList
}