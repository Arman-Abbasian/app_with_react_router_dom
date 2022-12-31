import React from "react";
import { useParams } from "react-router-dom";
import { PieChart } from "recharts";
import BarChrartWithBG from "../components/charts/BarChrartWithBG";
import CircleChartt from "../components/charts/CircleChart";
import PieChartt from "../components/charts/PieChartt";
import TinyBarChart from "../components/charts/TinyBarChartt";
import TinyLineChart from "../components/charts/TinyLineChart";
import SimpleRadialBarChart from "../components/charts/SimpleRadialBarChart";
import { cusotmerFinacial, NumberOfProduct, OEE, onTimeDelivery, productsQuality } from "../data";
import SimpleRadarChart from "../components/charts/SimpleRadarChart";
import Example from "../components/charts/SameDataComposedChart";
import SameDataComposedChart from "../components/charts/SameDataComposedChart";

const Home = () => {
    const {location}=useParams();
    console.log(location)
    return ( 
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-3">
            <div className="md:col-span-2 lg:col-span-3 bg-project-light-sky rounded-md p-4 max-w-full"><TinyLineChart data={NumberOfProduct} title={"number of production"} /></div>
            <div className="md:col-span-2 lg:col-span-3 bg-project-light-sky"><SameDataComposedChart data={cusotmerFinacial} /></div>
            <div className="md:col-span-1 lg:col-span-2 bg-project-light-sky"><PieChartt data={onTimeDelivery} /></div>
            <div className="md:col-span-1 lg:col-span-2 bg-project-light-sky"><PieChartt data={productsQuality} /></div>
            <div className="md:col-span-2 lg:col-span-2 bg-project-light-sky"><PieChartt data={onTimeDelivery} /></div>
            <div className="md:col-span-2 lg:col-span-3 bg-project-light-sky"><CircleChartt data={cusotmerFinacial} /></div>
            <div className="md:col-span-2 lg:col-span-3 bg-project-light-sky"><TinyBarChart data={OEE} /></div>
            <div className="md:col-span-2 lg:col-span-3 bg-project-light-sky"><BarChrartWithBG /></div>
            <div className="md:col-span-2 lg:col-span-3 bg-project-light-sky"><SimpleRadarChart data={cusotmerFinacial}/></div>
            
        </div>
     );
}
 
export default Home;