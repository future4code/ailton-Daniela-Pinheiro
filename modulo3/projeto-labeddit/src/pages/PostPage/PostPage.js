import React from "react"
import { useParams } from "react-router-dom"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { useRequestData } from "../../hooks/useRequestData"
import { Card, Typography } from "@mui/material"
import { ScreenContainer } from "../../constants/ScreenContainer"
import PostsCard from "../../components/PostsCard/PostsCard"
import { Divider, UpArrow, DownArrow, SmallCard } from "./styled"
import CreateComment from "../../components/CreateComment/CreateComment"

export default function PostPage() {
    useProtectedPage()
    const params = useParams()
    const comments = useRequestData(`/posts/${params.id}/comments`)
    
    const renderedComments = comments.length > 0 && comments.map((comment) => {
        return <Card variant="outlined" key={comment.id} sx={{ width: '97%', padding: '4px', marginBottom: '4px' }}>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
            Enviado por: {comment.username}
        </Typography>
        <Typography variant="body">
            {comment.body}
        </Typography>
        <SmallCard variant="outlined">
                <UpArrow />
                {comment.voteSum === null ? 0 : comment.voteSum}
                <DownArrow />
            </SmallCard>
    </Card>
    })
    
    const posts = useRequestData('/posts')
    const choosenPost = posts.length > 0 && posts.map((post) => {
        if(post.id === params.id) {
            return <PostsCard
                key={post.id}
                username={post.username}
                body={post.body}
                voteSum={post.voteSum}
                commentCount={post.commentCount}
            />
        }
    })

    return <ScreenContainer>
        {posts.length === 0 && <p>Carregando...</p>}
        {posts.length > 0 && choosenPost}

        <CreateComment id={params.id}/>

        <Divider />

        {comments.length === 0 && <p>Não há comentários.</p>}
        {comments.length > 0 && renderedComments}
    </ScreenContainer>
}