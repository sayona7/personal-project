import React, { Component } from 'react';
import Profile from './Profile/Profile';
import Pets from "./Pets/Pets";
import Cal from "./Calendar/Calendar";
import Navbar from "./Navbar/Navbar";
import "./main.css";
import axios from 'axios';
import {connect} from 'react-redux';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    // componentDidMount() {
    //     if(!this.props.user.email) {
    //         this.props.history.push("/");
    //     }
    // }

    render() { 
        return ( 
            <div>
                <Navbar history={this.props.history}/>
                <Cal />
                <div className="mainWrapper">
                    <Profile />
                    <Pets />
                </div>
                
            </div>
        );
    }
}
 
const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Dashboard);