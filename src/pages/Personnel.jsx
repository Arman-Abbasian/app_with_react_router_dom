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
        <div className="flex justify-between items-center gap-4 container mx-auto max-w-2xl">
            {personnel.map(item=>{
                return (
                    <Link key={item.id} to={`/personnel/${item.name}`}  state={data}>
                        <div className="bg-project-light-sky rounded-md p-2">
                            <div class="aspect-w-1 aspect-h-1 -mt-8">
                                <img src={item.image} alt="personnel" class="w-full h-full object-center object-contain" />
                            </div>
                            <div className="flex-1">
                                <h1 className="font-bold">{item.name}</h1>
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