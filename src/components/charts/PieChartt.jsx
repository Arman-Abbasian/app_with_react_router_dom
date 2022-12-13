import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 80 },
  { name: 'Group B', value: 20 },
];
const COLORS = ['#045149', 'white'];

const PieChartt=({data})=> {

    return (
      <PieChart width={400} height={150} >
        <Pie data={data} cy={100}  startAngle={180} endAngle={0} innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
};
export default PieChartt;
