import React from "react"
import { TableRow, TableContainer, TableTitle, TableInfo, TableIndex } from "./Table-styled"

export default function Table(props) {
    const participationTotal = props.persons && props.persons.reduce((total, item) => {
        return total + item.participation
    }, 0)

    const persons = props.persons && props.persons.map((person, index) => {
        const percentage = Math.round((person.participation/participationTotal) * 100)

        return <TableRow key={person.id}>
            <TableIndex>{index + 1}</TableIndex>
            <TableInfo>{person.name}</TableInfo>
            <TableInfo>{person.surname}</TableInfo>
            <TableInfo>{percentage}%</TableInfo>
        </TableRow>
    })

    return persons && <TableContainer>
        <TableRow>
            <TableIndex />
            <TableTitle>First name</TableTitle>
            <TableTitle>Last name</TableTitle>
            <TableTitle>Participation</TableTitle>
        </TableRow>
        {persons}
    </TableContainer>
}