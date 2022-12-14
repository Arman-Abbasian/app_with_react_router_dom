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


const SameDataComposedChart=({data})=>  {

    return (
        <ComposedChart width={400} height={150} data={data}>
          
          <Tooltip />
          <Bar dataKey="value" barSize={20} fill="#045149" />
          <Line type="monotone" dataKey="value" stroke="#045149" />
        </ComposedChart>
    );
  };
export default SameDataComposedChart;