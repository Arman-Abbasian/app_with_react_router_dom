import React from "react";
import { useLocation, useParams } from "react-router-dom";
const queryString = require('query-string');

const Person = () => {
    const params = useParams();
    const location = useLocation()
    console.log(params);
    console.log(location);
    console.log(queryString.parse(location.pathname))
    return ( 
        <div>
            person number {params.id}
        </div>
     );
}
 
export default Person;