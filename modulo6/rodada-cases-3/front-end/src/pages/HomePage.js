import React from "react"
import Title from "../components/Title/Title"
import Form from "../components/Form/Form"
import { HomeContainer } from "./HomePage-styled"
import Participation from "../components/Participation/Participation"

export default function HomePage() {

    return <HomeContainer>
        <Form />
        <Title />
        <Participation />
    </HomeContainer>
}