import React from 'react'
import { ContainerDetails, ContainerButtons } from './TripDetailsPage-styled'
import { useParams, useNavigate } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useRequestData } from '../../hooks/useRequestData'
import { goBack } from '../../routes/coordinator'
import { Button } from '../../constants/Button'
import { headers } from '../../constants/headers'
import CardTripDetails from '../../components/CardTripDetails/CardTripDetails'

export default function TripDetailsPage() {
    useProtectedPage()

    const pathParams = useParams()
    const navigate = useNavigate()

    const [data, isLoading, error] = useRequestData("trip", pathParams.id, headers)

    return <ContainerDetails>
        <ContainerButtons>
            <Button onClick={() => goBack(navigate)}>Voltar</Button>
        </ContainerButtons>

        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>Ocorreu um erro</p>}
        {!isLoading && !data && <p>Não há nenhuma viagem com essa id...</p>}
        {!isLoading && data && <CardTripDetails data={data} id={pathParams.id} />}  
    </ContainerDetails>
}