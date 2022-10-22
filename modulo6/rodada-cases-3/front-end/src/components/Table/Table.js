import React from "react"
import { PersonRow } from "./Table-styled"

export default function Table(props) {
    const persons = props.persons && props.persons.map((person, index) => {
        return <PersonRow key={person.id}>
            <p>{index + 1}</p>
            <p>{person.name}</p>
            <p>{person.surname}</p>
            <p>{person.participation}</p> {/* CALCULAR PORCENTAGEM */}
        </PersonRow>
    })

    return <div>
        {persons}
    </div>
}