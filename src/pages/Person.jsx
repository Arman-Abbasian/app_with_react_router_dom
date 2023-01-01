import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import TinyLineChart from "../components/charts/TinyLineChart";

const Person = () => {
    const params=useParams();
    console.log(params)
    const [person,setPerson]=useState({data:null,error:null,loading:false})
    const unit=params.unit;
    useEffect(()=>{
        const getData=async()=>{
            try {
                setPerson({data:null,error:null,loading:false})
                const {data}=await axios.get(`http://localhost:4000/personnel/${params.person}`);
                setPerson({data:data,error:null,loading:false})
            } catch (err) {
                setPerson({data:null,error:err.message,loading:false})
            }
        }
        getData();
    },[]);
    const rendering=()=>{
        if(person.loading) return <p>loading</p>
        if(!person.loading && person.error) return <p>l{person.error}</p>
        if(!person.loading && !person.error && person.data) 
     
        return <div key={person.data.id} className="grid lg:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-4 bg-project-light-sky rounded-md p-4">
                        <div class="aspect-w-2 aspect-h-1 -mt-10">
                            <img src={person.data.image} alt="personnel" class="w-full h-full object-center object-contain" />
                        </div>
                        <div className="flex-1 flex flex-col justify-center items-start gap-2 text-xl">
                            <div className="flex items-center text-sm gap-1"><p>name:</p><h1 className="font-bold">{person.data.name}</h1></div>
                            <div className="flex items-center text-sm gap-1"><p>age:</p><h1 className="font-bold">{person.data.age}</h1></div>
                            <div className="flex items-center text-sm gap-1"><p>position:</p><h1 className="font-bold">{person.data.position}</h1></div>
                            <div className="flex items-center text-sm gap-1"><p>record:</p><h1 className="font-bold">{person.data.record}</h1></div>
                        </div>
                    </div>
                    <div className=" w-full flex-1 bg-project-light-sky rounded-sm"><TinyLineChart data={person.data.performance} title={`${person.data.name} performance`} /></div>
                </div>
        
    }
    return ( 
        <>{rendering()}</>
     );
}
 
export default Person;