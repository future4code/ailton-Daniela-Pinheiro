import React from "react"
import "./CrewCards.css"

export default function CrewCards(props) {
    const crew = props.crew

    const crewList = []
    if(crew && crew.length <= 5) {
        for(let item of crew) {
            crewList.push(item)
        }
    } else {
        const characters = crew && crew.find(item => {
            return item.job === "Characters"
        })
        characters && crewList.push(characters)

        const director = crew && crew.find(item => {
            return item.job === "Director"
        })
        director && crewList.push(director)

        const screenplay = crew && crew.find(item => {
            return item.job === "Screenplay"
        })
        screenplay && crewList.push(screenplay)

        if(crewList.length < 5) {
            const producer = crew && crew.find(item => {
                return item.job === "Producer"
            })
            producer && crewList.push(producer)
        }
    }

    const crewCard = crewList.map(item => {
        return <div className="Crew-card">
            <h4 className="Crew-title">{item.name}</h4>
            <p>{item.job}</p>
        </div>
    })

    return crewCard
}