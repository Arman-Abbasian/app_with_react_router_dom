import React from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';


const SameDataComposedChart=({data,title})=>  {

    return (
      <div className='flex flex-col gap-4'>
        <h2 className='mb-4 text-center lg:font-bold sm:text-sm md:text-lg lg:text-2xl'>{title}</h2>
        <ResponsiveContainer width="100%" aspect={2}>
          <ComposedChart data={data}>
            <Tooltip />
            <Bar dataKey="value" barSize={20} fill="#045149" />
            <Line type="monotone" dataKey="value" stroke="#045149" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  };
export default SameDataComposedChart;