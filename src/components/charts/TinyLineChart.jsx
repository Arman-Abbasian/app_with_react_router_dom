import React, { version } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {dataHomeLine} from '../../data.js';


const TinyLineChart=({data,title})=> {
    return (
      <div className='flex flex-col gap-4'>
      <h2 className='mb-4 text-center lg:font-bold sm:text-sm md:text-lg lg:text-2xl'>{title}</h2>
      <ResponsiveContainer width="100%" aspect={2}>
          <LineChart data={data} margin={{ top: 9, left: 25, right: 25, bottom: 0 }} >
            <Line type="monotone" dataKey="value" stroke="#045149" strokeWidth={2} />
            <Tooltip />
            <XAxis dataKey="name" tickSize={2} tick={{stroke: '#045149', strokeWidth: 1,fontSize:8}} />
          </LineChart>
        </ResponsiveContainer>
        </div>
    );
}
export default TinyLineChart
