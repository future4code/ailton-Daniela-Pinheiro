import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToLoginPage } from '../../routes/coordinator'

import { useGetTripDetails } from '../../hooks/useAdminRequestData'


export default function TripDetailsPage() {

    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token === null) {
            goToLoginPage(navigate)
        }
    })

    const [trip, isLoading, error] = useGetTripDetails()

    const tripDetails = () => {
       return <div>
        <p>Data: {trip && trip.date}</p>
        <p>Aprovação: {trip && trip.aproved}</p>
       </div>
    } 

    // MAP EM CANDIDATES
    console.log(trip)

    return <div>
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>Ocorreu um erro</p>}
        {!isLoading && !trip && <p>Não há nenhuma viagem com essa id</p>}
        {!isLoading && trip && tripDetails()}
    </div>
}