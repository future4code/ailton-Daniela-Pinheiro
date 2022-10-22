import React from 'react'
import { PieChart, Pie, Cell, Legend } from 'recharts'

export default function Graph(props) {
    const persons = props.persons

    const fullName = []
    persons && fullName.push(persons[0].name)
    persons && fullName.push(persons[0].surname)

    const p = persons && persons[0].participation
    const data = [
        { name: fullName.join(" "), value: p },
        { name: 'Group B', value: 75 },
        { name: 'Group C', value: 40 },
        { name: 'Group D', value: 40 },
        { name: 'Group E', value: 2 }
    ]
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#a0a0a0']

    return <div>
        <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={100}
          cy={100}
          innerRadius={48}
          outerRadius={92}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
            width={160}
            wrapperStyle={{
                top: 20,
                right: 0,
                border: '1px solid #d5d5d5',
                lineHeight: '32px'
            }}
        />
      </PieChart>
    </div>
}