import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';


const COLORS = ['#045149', 'white'];

const CircleChartt=({data,title})=> {

    return (
      <div className='flex flex-col gap-4'>
        <h2 className='mb-4 text-center lg:font-bold sm:text-sm md:text-lg lg:text-2xl'>{title}</h2>
        <ResponsiveContainer width="100%" aspect={2}>
        <PieChart>
          <Pie data={data} innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={10} dataKey="value" label nameKey="name">
            <Tooltip />
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </ResponsiveContainer>
      </div>
    );
};
export default CircleChartt;
