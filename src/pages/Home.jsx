import React from "react";
import { useParams } from "react-router-dom";
import { PieChart } from "recharts";
import BarChrartWithBG from "../components/charts/BarChrartWithBG";
import CircleChartt from "../components/charts/CircleChart";
import PieChartt from "../components/charts/PieChartt";
import TinyBarChart from "../components/charts/TinyBarChartt";
import TinyLineChart from "../components/charts/TinyLineChart";
import SimpleRadialBarChart from "../components/charts/SimpleRadialBarChart";
import { cusotmerFinacial, OEE, onTimeDelivery, productsQuality } from "../data";
import SimpleRadarChart from "../components/charts/SimpleRadarChart";
import Example from "../components/charts/SameDataComposedChart";
import SameDataComposedChart from "../components/charts/SameDataComposedChart";

const Home = () => {
    const {location}=useParams();
    console.log(location)
    return ( 
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-3 mb-40">
            <div className="md:col-span-2 lg:col-span-3 bg-project-light-sky flex justify-center items-center rounded-md p-4"><TinyLineChart /></div>
            <div className="md:col-span-2 lg:col-span-3 bg-project-light-sky flex justify-center items-center rounded-md p-4"><SameDataComposedChart data={cusotmerFinacial} /></div>
            <div className="md:col-span-1 lg:col-span-2 bg-project-light-sky flex justify-center items-center rounded-md p-4"><PieChartt data={onTimeDelivery} /></div>
            <div className="md:col-span-1 lg:col-span-2 bg-project-light-sky flex justify-center items-center rounded-md p-4"><PieChartt data={productsQuality} /></div>
            <div className="md:col-span-2 lg:col-span-2 bg-project-light-sky flex justify-center items-center rounded-md p-4"><PieChartt data={onTimeDelivery} /></div>
            <div className="md:col-span-2 lg:col-span-3 bg-project-light-sky flex justify-center items-center rounded-md p-4"><CircleChartt data={cusotmerFinacial} /></div>
            <div className="md:col-span-2 lg:col-span-3 bg-project-light-sky flex justify-center items-center rounded-md p-4"><TinyBarChart data={OEE} /></div>
            <div className="md:col-span-2 lg:col-span-3 bg-project-light-sky flex justify-center items-center rounded-md p-4 lg:mb-20"><BarChrartWithBG /></div>
            <div className="md:col-span-2 lg:col-span-3 bg-project-light-sky flex justify-center items-center rounded-md p-4 mb-20"><SimpleRadarChart data={cusotmerFinacial}/></div>
            
        </div>
     );
}
 
export default Home;