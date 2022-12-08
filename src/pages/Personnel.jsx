import { Link, NavLink } from "react-router-dom";
import React from "react";
import { useState } from "react";
const Personnel = () => {
    const [data,setData]=useState({age:15})
    const personnel=[
        {id:1,name:"producer"},
        {id:2,name:"logistic"},
    ]
    return ( 
        <div>
            {personnel.map(item=>{
                return <Link key={item.id} to={`/personnel/${item.name}`}  state={data} >{item.name}</Link>
            })}
        </div>
     );
}
 
export default Personnel;