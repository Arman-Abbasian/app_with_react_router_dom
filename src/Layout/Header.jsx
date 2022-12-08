import Navigation from "../components/Navigation";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const links=[
        {id:1,name:"Home",to:"/"},
        {id:2,name:"About-us",to:"/about-us"},
        {id:3,name:"Profile",to:"/profile"},
        {id:4,name:"Personnel",to:"/personnel"}
    ]
    const [showOptions,setShowOptions]=useState(false)
    return ( 
        <header className="bg-project-light-sky flex px-2 py-1">
            <div className="flex flex-col justify-center items-start p-3 w-full cursor-pointer md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={()=>setShowOptions(!showOptions)} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <ul className={`w-1/2 transition-all duration-1000 ${!showOptions ?'h-0 opacity-0 -z-10':' h-40 opacity-100 z-0'}`}>
                    {links.map((item ,index)=>{
                return  <li key={index} onClick={()=>setShowOptions(false)} className="p-2 hover:bg-project-dark-green rounded-sm transition-all duration-300"><Link to={item.to}>{item.name}</Link></li>
            })}          
                </ul>
            </div>

            <Navigation />
        </header>
     );
}
 
export default Header;