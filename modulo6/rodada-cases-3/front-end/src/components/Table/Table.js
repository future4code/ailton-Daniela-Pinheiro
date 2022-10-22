import React from "react"
import { TableRow, TableContainer, TableTitle, TableInfo } from "./Table-styled"

export default function Table(props) {
    const persons = props.persons && props.persons.map((person, index) => {
        return <TableRow key={person.id}>
            <TableInfo>{index + 1}</TableInfo>
            <TableInfo>{person.name}</TableInfo>
            <TableInfo>{person.surname}</TableInfo>
            <TableInfo>{person.participation}</TableInfo> {/* CALCULAR PORCENTAGEM */}
        </TableRow>
    })

    return <TableContainer>
        <TableRow>
            <TableTitle></TableTitle>
            <TableTitle>First name</TableTitle>
            <TableTitle>Last name</TableTitle>
            <TableTitle>Participation</TableTitle>
        </TableRow>
        {persons}
    </TableContainer>
}