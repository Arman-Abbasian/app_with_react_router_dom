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
        <nav>
          <ul className="flex justify-start items-center">
            {links.map(item=>{
                return <li key={item.id}><Link to={item.to}>{item.name}</Link></li>
            })}
            
          </ul>
        </nav>
     );
}
 
export default Navigation;