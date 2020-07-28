import React, { Component } from 'react';
import "./navbar.css";
import {Link} from "react-router-dom";

function Navbar(props) {
    return props.url === "/" ? null : 
    <nav className="navbar">
        < div className="nav-links">
            <span className="nav-links">
                <Link to="/about">About</Link>
            </span>
            <span>
                <Link to="/chat">Chat</Link>
            </span>
            <span>
                Username
            </span>
            <button>Logout</button>
        <div>
            <img src="https://via.placeholder.com/150" alt="profile" />
        </div>
        </div>
    </nav>
}
 
export default Navbar;