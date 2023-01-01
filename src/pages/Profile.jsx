import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, Outlet } from "react-router-dom";
import PersonnelCarousel from "../components/personnelCarousel";
import LogisticPersonnel from "./LogisticPersonnel";
import ProducerPersonnel from "./ProducerPersonnel";
const Profile = () => {
    const [wholePersonnel,setWholePersonnel]=useState(null);
    const[wholeLogisticPersonnel,setWholeLogisticPersonnel]=useState(null);
    const[wholeProducerPersonnel,setWholeProducerPersonnel]=useState(null);
    useEffect(()=>{
        axios.get(`http://localhost:4000/personnel`)
        .then(res=>setWholePersonnel(res.data))
        .catch(err=>toast.error(err.message))
    },[]);
    useEffect(()=>{
        axios.get(`http://localhost:4000/personnel?kind=logistic`)
        .then(res=>setWholeLogisticPersonnel(res.data))
        .catch(err=>toast.error(err.message))
    },[]);
    useEffect(()=>{
        axios.get(`http://localhost:4000/personnel?kind=producer`)
        .then(res=>setWholeProducerPersonnel(res.data))
        .catch(err=>toast.error(err.message))
    },[]);
    return ( 
        <div className="flex flex-col gap-8 justify-center items-center">
            <div className="flex justify-between items-center flex-wrap gap-4 mb-10">
                <div className="w-full flex justify-center items-center">
                    {wholePersonnel && 
                        <Link to={`/profile/producerPersonnel`}>
                        <h2 className="text-center mb-2">whole Personnel</h2>
                        <PersonnelCarousel personnel={wholePersonnel} />
                    </Link>
                    }
                </div>
                <div className="flex-1 flex justify-center items-center bg-project-light-sky rounded-sm p-2">
                    {wholeProducerPersonnel && 
                        <Link to={`/profile/producerPersonnel`}>
                        <h2 className="text-center mb-2">Producer Personnel</h2>
                        <PersonnelCarousel personnel={wholeProducerPersonnel} />
                    </Link>
                    }
                </div>
                <div className="flex-1 flex justify-center items-center bg-project-light-sky rounded-sm p-2">
                    {wholeLogisticPersonnel && 
                        <Link to={`/profile/logisticPersonnel`}>
                        <h2 className="text-center mb-2">logistic Personnel</h2>
                        <PersonnelCarousel personnel={wholeLogisticPersonnel} />
                    </Link>
                    }
                </div>
            </div>
            <Outlet />
        </div>
     );
}
 
export default Profile;