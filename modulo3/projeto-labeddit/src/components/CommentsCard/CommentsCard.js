import React from "react"
import { Card, Typography } from "@mui/material"
import { UpArrow, DownArrow, SmallCard } from "./styled"
import { voteComment } from "../../services/comments"

export function CommentsCard(props) {

    const onClickVote = (number) => {
        const body = {
            "direction": number
        }
        voteComment(props.id, body)
    }

    return <Card variant="outlined" sx={{ width: '97%', padding: '4px', marginBottom: '4px' }}>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
            Enviado por: {props.username}
        </Typography>
        <Typography variant="body">
            {props.body}
        </Typography>
        <SmallCard variant="outlined">
            <UpArrow onClick={() => onClickVote(+1)} />
            {props.voteSum === null ? 0 : props.voteSum}
            <DownArrow onClick={() => onClickVote(-1)} />
        </SmallCard>
    </Card>
}