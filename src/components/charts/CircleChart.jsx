import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';


const COLORS = ['#045149', 'white'];

const CircleChartt=({data})=> {

    return (
      <PieChart width={400} height={160} >
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={10}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
};
export default CircleChartt;
