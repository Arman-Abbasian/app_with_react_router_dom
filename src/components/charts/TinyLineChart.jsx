import React, { version } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {dataHomeLine} from '../../data.js';


const TinyLineChart=({data,title})=> {
  const CustomTooltip = ({ data, label }) => {
    if (data && data.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${data.value}`}</p>
        </div>
      );
    }
  
    return null;
  };
    return (
      <div className='flex flex-col gap-4'>
      <h2 className='mb-4 text-center fong-bold text-2xl'>{title}</h2>
        <LineChart width={400} height={150} data={data}>
          <Line type="monotone" dataKey="value" stroke="#045149" strokeWidth={2} />
          <Tooltip content={<CustomTooltip label="name" data={data} />} />
          
        </LineChart>
        </div>
    );
}
export default TinyLineChart
