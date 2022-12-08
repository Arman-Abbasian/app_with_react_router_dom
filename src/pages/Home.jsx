import React from "react";
import { useParams } from "react-router-dom";

const Home = () => {
    const {location}=useParams();
    console.log(location)
    return ( 
        <div className="z-20">home</div>
     );
}
 
export default Home;