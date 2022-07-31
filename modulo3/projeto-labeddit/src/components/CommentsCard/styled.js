import styled from "styled-components"
import ForwardRoundedIcon from '@mui/icons-material/ForwardRounded'
import { Card } from '@mui/material'
import { primaryColor } from "../../constants/colors"

export const SmallCard = styled(Card)`
display: flex;
align-items: center;
justify-content: space-between;
padding: 2px;
margin: 8px 2px 2px 2px;
min-width: 20%;
max-width: 26%;
`
export const UpArrow = styled(ForwardRoundedIcon)`
transform: rotate(-90deg);
color: #909090;
&:active {
    color: ${primaryColor};
}
`
export const DownArrow = styled(ForwardRoundedIcon)`
transform: rotate(90deg);
color: #909090;
&:active {
    color: ${primaryColor};
}
`