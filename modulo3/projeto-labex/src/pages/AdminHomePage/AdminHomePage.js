import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { goToCreateTripPage, goToTripDetailsPage } from '../../routes/coordinator'


export default function AdminHomePage() {
    useProtectedPage()

    const navigate = useNavigate()

    return <div>
        Área Administrativa
        <button onClick={() => navigate(-1)}>Voltar</button>
        {/* teste */}
        <button onClick={() => goToTripDetailsPage(navigate, "2AaaNKGWQ7PMcEojWPRv")}>Detalhes da viagem TESTE</button>
        <button onClick={() => goToCreateTripPage(navigate)}>Cadastrar nova viagem</button>
    </div>
}