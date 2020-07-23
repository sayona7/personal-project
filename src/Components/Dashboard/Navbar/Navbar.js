import React, { Component } from 'react';

function Navbar(props) {
    return props.url === "/" ? null : 
    <nav>
        <div>
            About
        </div>
        <div>
            Chat
        </div>
        <div>
            Username
        </div>
        <div>Photo</div>
    </nav>
}
 
export default Navbar;