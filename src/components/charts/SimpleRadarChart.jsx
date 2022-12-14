import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const SimpleRadarChart=({data})=> {
    return (
        <RadarChart cx="50%" cy="50%" width={400} height={150}  outerRadius="70%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="value" stroke="#045149" fill="#045149" fillOpacity={0.6} />
        </RadarChart>
    );
  }
export default SimpleRadarChart;
