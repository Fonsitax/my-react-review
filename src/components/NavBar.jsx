import React from "react";  
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div>
                <div className="logo">
                    <h1>I am Nav Bar :)</h1>
                </div>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;