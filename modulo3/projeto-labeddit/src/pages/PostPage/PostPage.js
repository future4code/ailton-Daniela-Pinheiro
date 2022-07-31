import React from "react"
import { useParams } from "react-router-dom"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { useRequestData } from "../../hooks/useRequestData"
import { ScreenContainer } from "../../constants/ScreenContainer"
import PostsCard from "../../components/PostsCard/PostsCard"
import { Divider } from "./styled"
import CreateComment from "../../components/CreateComment/CreateComment"
import { CommentsCard } from "../../components/CommentsCard/CommentsCard"

export default function PostPage() {
    useProtectedPage()
    const params = useParams()

    const posts = useRequestData('/posts')
    const choosenPost = posts.length > 0 && posts.map((post) => {
        if(post.id === params.id) {
            return <PostsCard
                key={post.id}
                id={post.id}
                username={post.username}
                body={post.body}
                voteSum={post.voteSum}
                commentCount={post.commentCount}
            />
        }
    })

    const comments = useRequestData(`/posts/${params.id}/comments`)
    const renderedComments = comments.length > 0 && comments.map((comment) => {
        return <CommentsCard
            key={comment.id}
            id={comment.id}
            username={comment.username}
            body={comment.body}
            voteSum={comment.voteSum}
        />
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