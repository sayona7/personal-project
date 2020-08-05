import React, { Component } from 'react';
import "./calendar.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {Link} from "react-router-dom";


class Cal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            events: []
         }
    }

    onClick = () => {
        
    }

    
    render() { 
        return ( 
            <div className="cal-wrapper">
                <Calendar/>
                <Link to="/booking"><button id="cal-btn">Book dates</button></Link>
            </div>
         );
    }
}
 
export default Cal;