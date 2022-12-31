import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, Outlet } from "react-router-dom";
const Profile = () => {
    const [wholePersonnel,setWholePersonnel]=useState(null);
    useEffect(()=>{
        axios.get(`http://localhost:4000/personnel`)
        .then(res=>setWholePersonnel(res.data))
        .catch(err=>toast.error(err.message))
    },[])
    return ( 
        <div>
            {wholePersonnel && 
            <div className="flex items-center flex-wrap">
            {wholePersonnel.map(item=>(
             <p className="flex items-center justify-center w-5 h-5 rounded-full ring-1 ring-project-light-sky overflow-hidden -ml-1"><img src={item.image} /></p>
            ))} 
         </div>}
            <Link to={`/profile/1`}>profile 1</Link>
            <Link to={`/profile/2`}>profile 2</Link>
            <Outlet />
        </div>
     );
}
 
export default Profile;