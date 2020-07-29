import React, { Component } from 'react';
import "./calendar.css";
import Calendar from "react-calendar";


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
                <button>Make a booking</button>
            </div>
         );
    }
}
 
export default Cal;