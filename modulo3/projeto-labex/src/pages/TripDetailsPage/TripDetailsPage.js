import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useRequestData } from '../../hooks/useRequestData'
import { goBack } from '../../routes/coordinator'
import { Button } from '../../constants/Button'


export default function TripDetailsPage() {
    useProtectedPage()

    const pathParams = useParams()
    const navigate = useNavigate()

    // constantes??
    const token = localStorage.getItem('token')
    const header = {
        headers: {
            auth: token
        }
    }
    const [data, isLoading, error] = useRequestData("trip", pathParams.id, header)

    const tripDetails = () => {
       return <div>
        <p>{data.trip && data.trip.name}</p>
        {/* <p>{data.trip && data.trip.planet}</p> */}
        <p>Data: {data.trip && data.trip.date}</p>
        <p>Aprovação: {data.trip && data.trip.aproved}</p>
       </div>
    } 

    // MAP EM CANDIDATES
    // console.log(data)

    return <div>
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>Ocorreu um erro</p>}
        {!isLoading && !data && <p>Não há nenhuma viagem com essa id...</p>}
        {!isLoading && data && tripDetails()}
        <Button onClick={() => goBack(navigate)}>Voltar</Button>
    </div>
}