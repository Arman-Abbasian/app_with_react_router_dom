import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const SimpleRadarChart=({data,title})=> {
    return (
      <div className='flex flex-col gap-4'>
      <h2 className='mb-4 text-center lg:font-bold sm:text-sm md:text-lg lg:text-2xl'>{title}</h2>
      <ResponsiveContainer width="100%" aspect={2}>
        <RadarChart cx="50%" cy="50%" width={400} height={150}  outerRadius="70%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="value" stroke="#045149" fill="#045149" fillOpacity={0.6} />
        </RadarChart>
        </ResponsiveContainer>
        </div>
    );
  }
export default SimpleRadarChart;
