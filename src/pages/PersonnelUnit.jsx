import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const PersonnelUnit = () => {
    const params=useParams();
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
            return <div key={item.id}>{item.name}</div>
        })
    }
    return ( 
        <div>{rendering()}</div>
     );
}
 
export default PersonnelUnit;