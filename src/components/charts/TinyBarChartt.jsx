import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const TinyBarChart=({data})=> {
    return (
        <BarChart width={400} height={150} data={data}>
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
    );
};
export default TinyBarChart;
