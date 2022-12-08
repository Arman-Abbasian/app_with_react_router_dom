import React from "react";
import { Link, Outlet } from "react-router-dom";
const Profile = () => {
    return ( 
        <div>
            <p>profile</p>
            <Link to={`/profile/1`}>profile 1</Link>
            <Link to={`/profile/2`}>profile 2</Link>
            <Outlet />
        </div>
     );
}
 
export default Profile;