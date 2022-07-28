import React from "react"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import PostsCard from "../../components/PostsCard/PostsCard"
import { useRequestData } from "../../hooks/useRequestData"
import { useNavigate } from "react-router-dom"
import { goToPostPage } from "../../router/coordinator"

export default function FeedPage() {
    useProtectedPage()
    const navigate = useNavigate()
    const posts = useRequestData("/posts")
    // console.log(posts[0])

    const renderedPosts = (posts.length > 0) && posts.map((post) => {
            return <PostsCard
                key={post.id}
                username={post.username}
                body={post.body}
                onClick={() => goToPostPage(navigate, post.id)}
            />
        })

    return <div>
        <h2>Feed</h2>
        {posts.length === 0 && <p>Carregando...</p>}
        {posts.length > 0 && renderedPosts}
    </div>
}