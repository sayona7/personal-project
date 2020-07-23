import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Profile from './Profile/Profile';
import Pets from "./Pets/Pets";
import Calendar from "./Calendar/Calendar";
import Navbar from "./Navbar/Navbar";


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
               <p>Hello from the Dashboard!</p>
            <Link to="/about">Redirecting to: About</Link>
            <Navbar />
            <Calendar />
            <Pets />
            <Profile />

            </div>
        );
    }
}
 
export default Dashboard;