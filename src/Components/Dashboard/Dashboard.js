import React, { Component } from 'react';
import Profile from './Profile/Profile';
import Pets from "./Pets/Pets";
import Calendar from "./Calendar/Calendar";
import Navbar from "./Navbar/Navbar";
import "./main.css";


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Navbar />
                <Calendar />
                <div className="mainWrapper">
                    <Profile />
                    <Pets />
                </div>
                
            </div>
        );
    }
}
 
export default Dashboard;