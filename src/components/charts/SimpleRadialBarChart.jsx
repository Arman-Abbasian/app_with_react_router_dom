import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '18-24',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: '25-29',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed',
  },
  {
    name: '30-34',
    uv: 15.69,
    pv: 1398,
    fill: '#8dd1e1',
  },
  {
    name: '35-39',
    uv: 8.22,
    pv: 9800,
    fill: '#82ca9d',
  },
  {
    name: '40-49',
    uv: 8.63,
    pv: 3908,
    fill: '#a4de6c',
  },
  {
    name: '50+',
    uv: 2.63,
    pv: 4800,
    fill: '#d0ed57',
  },
  {
    name: 'unknow',
    uv: 6.67,
    pv: 4800,
    fill: '#ffc658',
  },
];

 const SimpleRadialBarChart=({title})=> {

    return (
      <div className='flex flex-col gap-4'>
        <h2 className='mb-4 text-center lg:font-bold sm:text-sm md:text-lg lg:text-2xl'>{title}</h2>
        <ResponsiveContainer width="100%" aspect={2}>
          <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
            <RadialBar
              background
              clockWise
              dataKey="pv"
            />
            <Legend iconSize={10}  verticalAlign="bottom"  />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    );
  }
  export default SimpleRadialBarChart;
