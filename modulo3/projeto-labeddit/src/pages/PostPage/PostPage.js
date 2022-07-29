import React from "react"
import { useParams } from "react-router-dom"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { useRequestData } from "../../hooks/useRequestData"
import { Card, Typography } from "@mui/material"
import { ScreenContainer } from "../../constants/ScreenContainer"

export default function PostPage() {
    useProtectedPage()
    const params = useParams()
    const comments = useRequestData(`/posts/${params.id}/comments`)

    const renderedComments = comments.length > 0 && comments.map((comment) => {
        return <Card variant="outlined" key={comment.id}>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
            Enviado por: {comment.username}
        </Typography>
        <Typography variant="body">
            {comment.body}
        </Typography>
    </Card>
    })

    return <ScreenContainer>
        <h1>Post</h1>
        {comments.length === 0 && <p>Não há comentários.</p>}
        {comments.length > 0 && renderedComments}
    </ScreenContainer>
}