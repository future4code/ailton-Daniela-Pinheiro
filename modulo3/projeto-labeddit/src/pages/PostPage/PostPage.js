import React from "react"
import { useParams } from "react-router-dom"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { useRequestData } from "../../hooks/useRequestData"
import { Card, Typography } from "@mui/material"
import { ScreenContainer } from "../../constants/ScreenContainer"
import PostsCard from "../../components/PostsCard/PostsCard"

export default function PostPage() {
    useProtectedPage()
    const params = useParams()
    const comments = useRequestData(`/posts/${params.id}/comments`)
    
    const renderedComments = comments.length > 0 && comments.map((comment) => {
        return <Card variant="outlined" key={comment.id} sx={{ width: '100%' }}>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
            Enviado por: {comment.username}
        </Typography>
        <Typography variant="body">
            {comment.body}
        </Typography>
    </Card>
    })
    
    const posts = useRequestData('/posts')
    const choosenPost = posts.length > 0 && posts.map((post) => {
        if(post.id === params.id) {
            return <PostsCard
                key={post.id}
                username={post.username}
                body={post.body}
            />
        }
    })

    return <ScreenContainer>
        <h1>Post</h1>
        {posts.length === 0 && <p>Carregando...</p>}
        {posts.length > 0 && choosenPost}
        {comments.length === 0 && <p>Não há comentários.</p>}
        {comments.length > 0 && renderedComments}
    </ScreenContainer>
}