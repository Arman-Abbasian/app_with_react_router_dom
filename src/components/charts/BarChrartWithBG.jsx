import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'BENZ',
    pv: 95,
    amt: 100,
  },
  {
    name: 'Toyota',

    pv: 80,
    amt: 100,
  },
  {
    name: 'Audi',
    pv: 70,
    amt: 100,
  },
  {
    name: 'BMW',
    pv: 75,
    amt: 100,
  },
];

const BarChrartWithBG=({title})=> {

    return (
      <div className='flex flex-col gap-4'>
        <h2 className='mb-4 text-center lg:font-bold sm:text-sm md:text-lg lg:text-2xl'>{title}</h2>
        <ResponsiveContainer width="100%" aspect={2}>
          <BarChart  data={data}>
            <Bar dataKey="pv" fill="#045149" background={{ fill: '#eee' }} barSize={25}  />
            <Tooltip />
            <XAxis dataKey="name" tickSize={2} tick={{stroke: '#045149', strokeWidth: 1,fontSize:8}} />
          </BarChart>
        </ResponsiveContainer>
        </div>
    );
  }
export default BarChrartWithBG;
