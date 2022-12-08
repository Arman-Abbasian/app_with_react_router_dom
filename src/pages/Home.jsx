import React from "react";
import { useParams } from "react-router-dom";

const Home = () => {
    const {location}=useParams();
    console.log(location)
    return ( 
        <div className="grid grid-cols-2">
            <div className="col-span-2 bg-red-200">home</div>
                <div className="col-span-1 bg-green-100">d</div>
                <div className="col-span-1 bg-sky-400">d</div>
            <div className="col-span-2 bg-green-500">e</div>
        </div>
     );
}
 
export default Home;