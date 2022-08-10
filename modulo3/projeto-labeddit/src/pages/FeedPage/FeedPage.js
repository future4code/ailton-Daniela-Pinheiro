import React from "react"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import PostsCard from "../../components/PostsCard/PostsCard"
import { useRequestData } from "../../hooks/useRequestData"
import { useNavigate } from "react-router-dom"
import { goToPostPage } from "../../router/coordinator"
import CreatePost from "../../components/CreatePost/CreatePost"
import { Divider } from "./styled"
import { ScreenContainer } from "../../constants/ScreenContainer"
import { CircularProgress } from "@mui/material"

export default function FeedPage() {
    useProtectedPage()
    const navigate = useNavigate()
    const posts = useRequestData("/posts")

    const renderedPosts = (posts.length > 0) && posts.map((post) => {
            return <PostsCard
                key={post.id}
                id={post.id}
                username={post.username}
                body={post.body}
                voteSum={post.voteSum}
                commentCount={post.commentCount}
                onClickPost={() => goToPostPage(navigate, post.id)}
            />
        })

    return <ScreenContainer>
        <CreatePost />

        <Divider />

        {!posts && <CircularProgress />}
        {posts && posts.length === 0 && <CircularProgress />}
        {posts && posts.length > 0 && renderedPosts}
    </ScreenContainer>
}