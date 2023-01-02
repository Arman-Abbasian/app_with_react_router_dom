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


const SameDataComposedChart=({data,bar,line,title})=>  {

    return (
      <div className='flex flex-col gap-4'>
        <h2 className='mb-4 text-center lg:font-bold sm:text-sm md:text-lg lg:text-2xl'>{title}</h2>
        <ResponsiveContainer width="100%" aspect={2}>
          <ComposedChart data={data} margin={{ top: 9, left: 25, right: 25, bottom: 9 }}>
            <Tooltip />
            <XAxis dataKey="name" tickSize={2} tick={{stroke: '#045149', strokeWidth: 1,fontSize:8}} />
            <Bar dataKey={bar} barSize={20} fill="#045149" />
            <Line type="monotone" dataKey={line} stroke="#045149" strokeWidth={2} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  };
export default SameDataComposedChart;