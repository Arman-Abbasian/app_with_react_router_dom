import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const PersonnelUnit = () => {
    const params=useParams();
    console.log(params)
    const [personnel,setPersonnel]=useState({data:null,error:null,loading:false})
    const unit=params.unit;
    useEffect(()=>{
        const getData=async()=>{
            try {
                setPersonnel({data:null,error:null,loading:false})
                const {data}=await axios.get(`http://localhost:4000/personnel?unit=${unit}`);
                setPersonnel({data:data,error:null,loading:false})
            } catch (err) {
                setPersonnel({data:null,error:err.message,loading:false})
            }
        }
        getData();
    },[]);
    const rendering=()=>{
        if(personnel.loading) return <p>loading</p>
        if(!personnel.loading && personnel.error) return <p>l{personnel.error}</p>
        if(!personnel.loading && !personnel.error && personnel.data) 
       return personnel.data.map((item)=>{
            return <div key={item.id} className="bg-project-light-sky rounded-md p-2 pt-0">
            <Link key={item.name} to={`/personnel/${params.kind}/${params.unit}/${item.id}`} className="flex flex-col" >
                <div class="aspect-w-1 aspect-h-1 -mt-10">
                    <img src={item.image} alt="personnel" class="w-full h-full object-center object-contain" />
                </div>
                <div className="flex-1 flex flex-col justify-center items-start text-xl gap-2">
                    <div className="flex items-center text-sm gap-1"><p>position:</p><h1 className="font-bold">{item.name}</h1></div>
                    <div className="flex items-center text-sm gap-1"><p>position:</p><h1 className="font-bold">{item.position}</h1></div>
                </div>
            </Link>
        </div>
        })
    }
    return ( 
        <div className="grid grid-cols-2 lg:grid-cols-3 container mx-auto max-w-5xl items-center gap-12">{rendering()}</div>
     );
}
 
export default PersonnelUnit;