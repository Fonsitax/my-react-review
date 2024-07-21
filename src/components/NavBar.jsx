import React from "react";  
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div>
                <div className="logo">
                    <h1>This is Nav Bar</h1>
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li> <Link to="/blog">Blog</Link></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}
