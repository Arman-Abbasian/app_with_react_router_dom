import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {dataHomeLine} from '../../data.js';


const TinyLineChart=()=> {
    return (
        <LineChart width={400} height={150} data={dataHomeLine}>
          <Line type="monotone" dataKey="pv" stroke="#045149" strokeWidth={2} />
        </LineChart>
    );
}
export default TinyLineChart
