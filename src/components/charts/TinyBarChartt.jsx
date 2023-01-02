import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const TinyBarChart=({data,title})=> {
    return (
      <div className='flex flex-col gap-4'>
        <h2 className='mb-4 text-center lg:font-bold sm:text-sm md:text-lg lg:text-2xl'>{title}</h2>
        <ResponsiveContainer width="100%" aspect={2}>
          <BarChart  data={data}>
            <Bar dataKey="value" fill="#045149" barSize={25} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
};
export default TinyBarChart;
