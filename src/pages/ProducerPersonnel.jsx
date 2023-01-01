import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import PersonnelCard from "../components/PersonnelCard";

const ProducerPersonnel = () => {
    const[wholeProducerPersonnel,setWholeProducerPersonnel]=useState(null);
    useEffect(()=>{
        axios.get(`http://localhost:4000/personnel?kind=producer`)
        .then(res=>setWholeProducerPersonnel(res.data))
        .catch(err=>toast.error(err.message))
    },[]);

    return ( 
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 item content-center w-full">
            {wholeProducerPersonnel && 
                wholeProducerPersonnel.map(item=>(
                    <PersonnelCard name={item.name} unit={item.unit} position={item.position} image={item.image} />
                ))
            }
        </div>
     );
}
 
export default ProducerPersonnel;