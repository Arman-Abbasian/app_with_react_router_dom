import React from "react";
import { useParams } from "react-router-dom";

const Home = () => {
    const {location}=useParams();
    console.log(location)
    return ( 
        <div className="grid md:grid-cols-2 lg:grid-cols-6">
            <div className="md:col-span-2 lg:col-span-6 bg-red-200">home</div>
                <div className="md:col-span-1 lg:col-span-2 bg-green-100">d</div>
                <div className="md:col-span-1 lg:col-span-2 bg-sky-400">d</div>
                <div className="md:col-span-2 lg:col-span-2 bg-red-400">d</div>
            <div className="md:col-span-2 lg:col-span-3 bg-green-500">e</div>
            <div className="md:col-span-2 lg:col-span-3 bg-yellow-500">e</div>
        </div>
     );
}
 
export default Home;