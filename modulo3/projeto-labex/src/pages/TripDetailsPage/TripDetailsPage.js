import React from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useRequestData } from '../../hooks/useRequestData'


export default function TripDetailsPage() {

    useProtectedPage()

    // constantes??
    const token = localStorage.getItem('token')
    const header = {
        headers: {
            auth: token
        }
    }
    const [data, isLoading, error] = useRequestData("trip", "2AaaNKGWQ7PMcEojWPRv", header)

    const tripDetails = () => {
       return <div>
        <p>Data: {data.trip && data.trip.date}</p>
        <p>Aprovação: {data.trip && data.trip.aproved}</p>
       </div>
    } 

    // MAP EM CANDIDATES
    // console.log(data)

    return <div>
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>Ocorreu um erro</p>}
        {!isLoading && !data && <p>Não há nenhuma viagem com essa id</p>}
        {!isLoading && data && tripDetails()}
    </div>
}