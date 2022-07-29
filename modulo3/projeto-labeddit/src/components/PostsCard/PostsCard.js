import React from "react"
import { Card, Typography } from "@mui/material"

export default function PostsCard(props) {
    return <Card variant="outlined" onClick={props.onClickPost} sx={{ width: '100%' }}>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
            Enviado por: {props.username}
        </Typography>
        <Typography variant="body">
            {props.body}
        </Typography>
    </Card>
}