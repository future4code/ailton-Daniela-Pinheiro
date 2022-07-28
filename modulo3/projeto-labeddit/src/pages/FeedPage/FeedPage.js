import React from "react"
import { Button } from "@mui/material"
import { useProtectedPage } from "../../hooks/useProtectedPage"

export default function FeedPage() {
    useProtectedPage()
    
    return <div>
        Feed
        <Button variant="outlined">Outlined</Button>
    </div>
}