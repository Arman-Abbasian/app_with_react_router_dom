import React from "react";
import Footer from "./Footer";
import Header from "./Header";
const Layout = ({children}) => {
    return ( 
        <div className="p-2">
            <Header />
            {children}
        </div>
     );
}
 
export default Layout;