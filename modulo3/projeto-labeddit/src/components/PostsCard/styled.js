import styled from 'styled-components'
import ForwardRoundedIcon from '@mui/icons-material/ForwardRounded'
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded'
import { Card } from '@mui/material'
import { primaryColor } from '../../constants/colors'

export const CardsContainer = styled.div`
display: flex;
width: 100%;
justify-items: space-between;
`
export const SmallCard = styled(Card)`
display: flex;
align-items: center;
justify-content: space-between;
padding: 2px;
margin: 8px 2px 2px 2px;
min-width: 20%;
max-width: 26%;
`
export const SmallCommentCard = styled(Card)`
display: flex;
align-items: center;
justify-content: space-between;
padding: 2px 4px;
margin: 8px 2px 2px 2px;
min-width: 12%;
max-width: 20%;
`
export const Comment = styled(ChatBubbleRoundedIcon)`
width: 20px !important;
height: auto;
color: #909090;
&:active {
    color: ${primaryColor};
}
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