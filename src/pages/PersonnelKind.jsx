import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const PersonnelKind = () => {
    const params=useParams();
    const [units,setUnits]=useState({data:null,error:null,loading:false})
    const kind=params.kind;
    console.log(kind)
    useEffect(()=>{
        const getData=async()=>{
            try {
                setUnits({data:null,error:null,loading:false})
                const {data}=await axios.get(`http://localhost:4000/personnel?kind=${kind}`);
                const units=data.map(item=>{
                    return item.unit
                });
                let uniqueUnits = [];
                units.forEach((element) => {
                    if (!uniqueUnits.includes(element)) {
                        uniqueUnits.push(element);
                    }
                });
                setUnits({data:uniqueUnits,error:null,loading:false})
            } catch (err) {
                setUnits({data:null,error:err.message,loading:false})
            }
        }
        getData();
    },[]);
    const rendering=()=>{
        if(units.loading) return <p>loading</p>
        if(!units.loading && units.error) return <p>l{units.error}</p>
        if(!units.loading && !units.error && units.data) 
       return units.data.map((item,index)=>{
            return  <div className="bg-project-light-sky rounded-md p-2">
                        <Link key={index} to={`/personnel/${kind}/${item}`}>
                            <div class="aspect-w-1 aspect-h-1">
                                <img src={`image/units/${item}.png`} alt="personnel" class="w-full h-full object-center object-contain" />
                            </div>
                            <div className="flex justify-center items-center text-xl">
                                <h1 className="font-bold">{item} unit</h1>
                            </div>
                        </Link>
                    </div>
           
        })
    }
    return ( 
        <div className="grid grid-cols-2 lg:grid-cols-3 container mx-auto max-w-5xl items-center gap-8">{rendering()}</div>
     );
}
 
export default PersonnelKind;