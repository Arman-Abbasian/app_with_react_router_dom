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
            return <Link key={index} to={`/personnel/${kind}/${item}`}>{item}</Link>
        })
    }
    return ( 
        <div>{rendering()}</div>
     );
}
 
export default PersonnelKind;