import React from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledToolbar, Title } from './styled'
import { goToFeedPage, goToLoginPage } from '../../router/coordinator'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'

export default function Header() {
    const navigate = useNavigate()

    return <AppBar position="static">
            <StyledToolbar>
                <Button onClick={() => goToFeedPage(navigate)} color="inherit">X</Button>
                <Title>LabEddit</Title>
                <Button onClick={() => goToLoginPage(navigate)} color="inherit">Login</Button>
            </StyledToolbar>
        </AppBar>
}
