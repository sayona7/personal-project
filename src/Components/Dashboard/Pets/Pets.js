import React, { Component } from 'react';
import "./pets.css";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import "./pets.css";

class Pets extends Component {

    render() { 
        return ( 
            <div>
                <div className="petsWrapper">
                    <img src="https://via.placeholder.com/150" alt="animal" />
                    <div className="petInfo">
                        <p>Name:</p>
                        <p>Age:</p>
                        <p>Breed:</p>
                        <p>Male/female</p>
                        <p>Description:</p>
                    </div>
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = reduxState => reduxState.reducer;
 
export default connect(mapStateToProps)(Pets);