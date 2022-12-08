import React from "react";
import { useParams } from "react-router-dom";

const Home = () => {
    const {location}=useParams();
    console.log(location)
    return ( 
        <div>home</div>
     );
}
 
export default Home;