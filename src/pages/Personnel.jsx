import { Link, NavLink } from "react-router-dom";
import React from "react";
import { useState } from "react";
const Personnel = () => {
    const [data,setData]=useState({age:15})
    const personnel=[
        {id:1,name:"producer",image:"/image/producer.png"},
        {id:2,name:"logistic",image:"/image/logistic.png"},
    ]
    return ( 
        <div className="flex justify-between items-center gap-4">
            {personnel.map(item=>{
                return (
                    <Link key={item.id} to={`/personnel/${item.name}`}  state={data} >
                        <div className="border">
                            <div class="aspect-w-5 aspect-h-8">
                                <img src={item.image} alt="personnel" class="w-full h-full object-center object-cover" />
                            </div>
                            <div className="flex-1">
                                <h1>{item.name}</h1>
                                <p> explicabo error ipsa tenetur quod quae. Unde modi alias aperiam Itaque, rerum ipsum.</p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
     );
}
 
export default Personnel;