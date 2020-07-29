import React, { Component } from 'react';
import "./calendar.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


class Cal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            events: []
         }
    }

    
    render() { 
        return ( 
            <div className="cal-wrapper">
                <Calendar/>
                <button id="cal-btn">Book dates</button>
            </div>
         );
    }
}
 
export default Cal;