import styled from "styled-components"
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'

export const StyledToolbar = styled(Toolbar)`
display: flex;
justify-content: flex-end;
padding-right: 6% !important;
position: relative;
`
export const LogoImage = styled.img`
position: absolute;
left: 44%;
width: 32px;
height: auto;
`
export const ButtonClose = styled(Button)`
margin-right: 58% !important;
`