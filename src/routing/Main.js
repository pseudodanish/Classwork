import React from "react";
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import NoPage from "./NoPage";
import Contact from "./Contact";

function Main(){
    return(
        <>
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Shop">Shop</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/Shop" element={<Shop/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default Main;