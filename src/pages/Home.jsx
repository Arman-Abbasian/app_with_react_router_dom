import React from "react";
import { useParams } from "react-router-dom";
import { PieChart } from "recharts";
import BarChrartWithBG from "../components/charts/BarChrartWithBG";
import CircleChartt from "../components/charts/CircleChart";
import PieChartt from "../components/charts/PieChartt";
import TinyBarChart from "../components/charts/TinyBarChartt";
import TinyLineChart from "../components/charts/TinyLineChart";
import SimpleRadialBarChart from "../components/charts/SimpleRadialBarChart";
import { cusotmerFinacial, Efficiency, NumberOfProduct, OEE, onTimeDelivery, ppm, productsQuality } from "../data";
import SimpleRadarChart from "../components/charts/SimpleRadarChart";
import SameDataComposedChart from "../components/charts/SameDataComposedChart";

const Home = () => {
    const {location}=useParams();
    console.log(location)
    return ( 
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-3">
            <div className="md:col-span-2 lg:col-span-3 bg-project-light-sky rounded-md p-4"><TinyLineChart data={NumberOfProduct} title={"number of production"} /></div>
            <div className="md:col-span-2 lg:col-span-3 bg-project-light-sky rounded-md p-4"><SameDataComposedChart data={ppm} bar="ppm" line="numberOfScrap" title={"statistic of scraps"} /></div>
            <div className="md:col-span-1 lg:col-span-2 bg-project-light-sky rounded-md p-4"><PieChartt data={onTimeDelivery} title={"on time delivery"} /></div>
            <div className="md:col-span-1 lg:col-span-2 bg-project-light-sky rounded-md p-4"><PieChartt data={productsQuality} title={"customer quality satisfaction"} /></div>
            <div className="md:col-span-2 lg:col-span-2 bg-project-light-sky rounded-md p-4"><PieChartt data={onTimeDelivery} title={"customer performance satisfaction"} /></div>
            <div className="md:col-span-2 lg:col-span-3 bg-project-light-sky rounded-md p-4"><CircleChartt data={cusotmerFinacial} title={"customer's orders"} /></div>
            <div className="md:col-span-2 lg:col-span-3 bg-project-light-sky rounded-md p-4"><TinyBarChart data={Efficiency} title={"efficency"} /></div>
            <div className="md:col-span-2 lg:col-span-3 bg-project-light-sky rounded-md p-4"><BarChrartWithBG title={"percent of order fullfillment "} /></div>
            <div className="md:col-span-2 lg:col-span-3 bg-project-light-sky rounded-md p-4"><SimpleRadarChart data={cusotmerFinacial} title={"customer's turnover"}/></div>
            
        </div>
     );
}
 
export default Home;