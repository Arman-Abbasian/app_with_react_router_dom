import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
    const links=[
        {id:1,name:"Home",to:"/"},
        {id:2,name:"About-us",to:"/about-us"},
        {id:3,name:"Profile",to:"/profile"},
        {id:4,name:"Personnel",to:"/personnel"}
    ]
    return ( 
        <nav className="items-center hidden md:flex">
          <ul className="flex justify-start items-center gap-8  h-full">
            {links.map(item=>{
                return <li className="h-full" key={item.id}><Link to={item.to} className="hover:bg-project-dark-green transition-all duration-200 h-full flex justify-center items-center rounded-sm p-3">{item.name}</Link></li>
            })}
            
          </ul>
        </nav>
     );
}
 
export default Navigation;