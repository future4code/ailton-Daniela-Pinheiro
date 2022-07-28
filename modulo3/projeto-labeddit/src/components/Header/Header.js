import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledToolbar, Title } from './styled'
import { goToFeedPage, goToLoginPage } from '../../router/coordinator'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'

export default function Header() {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

    const logout = () => {
        localStorage.removeItem("token")
    }
    const onClickRightButton = () => {
        if(token) {
            logout()
            setRightButtonText("Login")
            goToLoginPage(navigate)
        } else {
            goToLoginPage(navigate)
        }
    }

    return <AppBar position="static">
            <StyledToolbar>
                <Button onClick={() => goToFeedPage(navigate)} color="inherit">X</Button>
                <Title>LabEddit</Title>
                <Button onClick={onClickRightButton} color="inherit">{rightButtonText}</Button>
            </StyledToolbar>
        </AppBar>
}
