import React from "react"
import Table from "../Table/Table"
import Graph from "../Graph/Graph"
import { ParticipationContainer } from "./Participation-styled"
import { useRequestData } from "../../hooks/useRequestData"

export default function Participation() {
    const participationData = useRequestData([])
    const persons = participationData && participationData.persons
  
    return <ParticipationContainer>
        <Table persons={persons} />
        <Graph persons={persons} />
    </ParticipationContainer>
}