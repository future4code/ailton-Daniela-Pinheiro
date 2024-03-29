import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { StyledToolbar, ButtonClose, LogoImage } from './styled'
import { goToFeedPage, goToLoginPage } from '../../router/coordinator'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import logo from "../../assets/img/logo.png"

export default function Header() {
    const navigate = useNavigate()
    const location = useLocation()
    const rightButtonText = location.pathname === "/cadastrar" ? "Login" : "Logout"

    const logout = () => {
        localStorage.removeItem("token")
    }
    const onClickRightButton = () => {
        if(rightButtonText === "Logout") {
            logout()
            goToLoginPage(navigate)
        } else {
            goToLoginPage(navigate)
        }
    }

    return location.pathname !== "/" && <AppBar position="static">
            <StyledToolbar>
                {location.pathname !== "/feed" && location.pathname !== "/cadastrar" && <ButtonClose onClick={() => goToFeedPage(navigate)} color="inherit">X</ButtonClose>}
                <LogoImage src={logo} alt="Logo" />
                <Button onClick={onClickRightButton} color="inherit">{rightButtonText}</Button>
            </StyledToolbar>
        </AppBar>
}
