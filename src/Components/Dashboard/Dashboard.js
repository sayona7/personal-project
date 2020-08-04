import React, { Component } from 'react';
import Profile from './Profile/Profile';
import Pets from "./Pets/Pets";
import Cal from "./Calendar/Calendar";
import "./main.css";

import {connect} from 'react-redux';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount() {
        // alert('Veronica rocks! you can do it')
    }

    render() { 
        console.log(this.props)
        return ( 
            <div>
                <Cal />
                <div className="mainWrapper">
                    <Profile />
                    <Pets />
                </div>
                
            </div>
        );
    }
}
 
const mapStateToProps = reduxState => reduxState.petReducer;

export default connect(mapStateToProps)(Dashboard);