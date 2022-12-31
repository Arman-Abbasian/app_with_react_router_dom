import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import PersonnelCard from "../components/PersonnelCard";

const LogisticPersonnel = () => {
    const[wholeLogisticPersonnel,setWholeLogisticPersonnel]=useState(null);
    useEffect(()=>{
        axios.get(`http://localhost:4000/personnel?kind=logistic`)
        .then(res=>setWholeLogisticPersonnel(res.data))
        .catch(err=>toast.error(err.message))
    },[]);
    return ( 
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {wholeLogisticPersonnel && 
                wholeLogisticPersonnel.map(item=>(
                    <PersonnelCard name={item.name} unit={item.unit }position={item.position} image={item.image} />
                ))
            }
        </div>
     );
}
 
export default LogisticPersonnel;