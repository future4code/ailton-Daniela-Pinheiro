import React from "react"
import Table from "../Table/Table"
import Graph from "../Graph/Graph"
import { ParticipationContainer } from "./Participation-styled"

export default function Participation() {

    return <ParticipationContainer>
        <Table />
        <Graph />
    </ParticipationContainer>
}