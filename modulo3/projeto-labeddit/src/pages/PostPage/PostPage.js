import React from "react"
import { useParams } from "react-router-dom"
import { useProtectedPage } from "../../hooks/useProtectedPage"

export default function PostPage() {
    useProtectedPage()
    const params = useParams()
    
    return <div>
        Post
        {params.id}
    </div>
}