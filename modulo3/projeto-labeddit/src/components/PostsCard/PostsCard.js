import React from "react"
import { Card, Typography } from "@mui/material"
import { CardsContainer, Comment, DownArrow, SmallCard, SmallCommentCard, UpArrow } from "./styled"
import { votePost } from "../../services/posts"

export default function PostsCard(props) {

    const onClickVote = (number) => {
        const body = {
            "direction": number
        }
        votePost(props.id, body)
    }

    return <Card variant="outlined" sx={{ width: '97%', padding: '4px', marginBottom: '4px' }}>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
            Enviado por: {props.username}
        </Typography>
        <Typography variant="body">
            {props.body}
        </Typography>
        <CardsContainer>
            <SmallCard variant="outlined">
                <UpArrow onClick={() => onClickVote(+1)} />
                {props.voteSum === null ? 0 : props.voteSum}
                <DownArrow onClick={() => onClickVote(-1)} />
            </SmallCard>
            <SmallCommentCard onClick={props.onClickPost} variant="outlined">
                <Comment />
                {props.commentCount === null ? 0 : props.commentCount}
            </SmallCommentCard>
        </CardsContainer>   
    </Card>
}