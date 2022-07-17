import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { goBack } from '../../routes/coordinator'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useRequestData } from '../../hooks/useRequestData'
import { headers } from '../../constants/headers'
import { ContainerDetails, ContainerButtons, CardText } from './TripDetailsPage-styled'
import { Button } from '../../constants/Button'
import CardTripDetails from '../../components/CardTripDetails/CardTripDetails'

export default function TripDetailsPage() {
    // Função de verificação de login
    useProtectedPage()
    // Função navegação
    const navigate = useNavigate()
    // Guardar parâmetros da url
    const pathParams = useParams()

    // Requisição para pegar informações da viagem específica
    const [data, isLoading, error] = useRequestData("trip", pathParams.id, headers)

    return <ContainerDetails>
        <ContainerButtons>
            <Button onClick={() => goBack(navigate)}>Voltar</Button>
        </ContainerButtons>

        {isLoading && <CardText>Carregando...</CardText>}
        {!isLoading && error && <CardText>Ocorreu um erro</CardText>}
        {!isLoading && !data && <CardText>Não há nenhuma viagem com essa id...</CardText>}
        {!isLoading && data && <CardTripDetails data={data} isLoading={isLoading} id={pathParams.id} />}  
    </ContainerDetails>
}