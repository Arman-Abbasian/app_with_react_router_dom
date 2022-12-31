import { Routes,Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Profile from './pages/Profile';
import React from "react";
import NotFound from "./pages/NotFound";
import Personnel from "./pages/Personnel";
import Profile1 from './pages/Profile1';
import Profile2 from './pages/Profile2';
import PersonnelKind from "./pages/PersonnelKind";
import PersonnelUnit from "./pages/PersonnelUnit";
import Person from "./pages/Person";
import ProducerPersonnel from "./pages/ProducerPersonnel";
import LogisticPersonnel from "./pages/LogisticPersonnel";

const Routee = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/profile/*" element={<Profile />}>
                <Route path="producerPersonnel" element={<ProducerPersonnel />} />
                <Route path="logisticPersonnel" element={<LogisticPersonnel />} />
            </Route>
            <Route path="/Personnel" element={<Personnel />} />
            <Route path="/personnel/:kind" exact={true} element={<PersonnelKind />} />
            <Route path="/personnel/:kind/:unit"  element={<PersonnelUnit />} />
            <Route path="/personnel/:kind/:unit/:person"  element={<Person />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
     );
}
 
export default Routee;