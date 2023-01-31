import React from 'react'
import { PieChart, Pie, Cell, Legend } from 'recharts'
import { GRAPH_COLORS } from '../../constants/colors'

export default function Graph(props) {
    const persons = props.persons

    const data = persons && persons.map(person => {
        const fullName = []
        fullName.push(person.name)
        fullName.push(person.surname)

        const name = fullName.join(" ")

        const value = person.participation

        return { name, value }
    })

    return <div>
        <PieChart width={500} height={400}>
        <Pie
          data={data}
          cx={100}
          cy={100}
          innerRadius={48}
          outerRadius={92}
          paddingAngle={2}
          dataKey="value"
        >
        {data && data.map((item, index) => (
            <Cell
                key={`cell-${index}`}
                fill={GRAPH_COLORS[index % GRAPH_COLORS.length]}
            />
        ))}
        </Pie>

        <Legend
            width={160}
            wrapperStyle={{
                top: 20,
                right: 60,
                lineHeight: '36px',
            }}
            align
        />
      </PieChart>
    </div>
}