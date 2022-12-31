import React, { version } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {dataHomeLine} from '../../data.js';


const TinyLineChart=({data,title})=> {
    return (
      <div className='flex flex-col gap-4'>
      <h2 className='mb-4 text-center font-bold text-2xl'>{title}</h2>
      <ResponsiveContainer width="100%" aspect={3}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="value" stroke="#045149" strokeWidth={2} />
            <Tooltip />
            <XAxis dataKey="name" />
          </LineChart>
        </ResponsiveContainer>
        </div>
    );
}
export default TinyLineChart
