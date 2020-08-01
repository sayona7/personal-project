import React, { Component } from 'react';
import "./pets.css";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import "./pets.css";

class Pet extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="pets-Wrapper">
            <img src="https://via.placeholder.com/150" alt="animal" />
            <div className="petInfo">
                <p>Name</p>
                <p>Age</p>
                <p>Breed</p>
                <p>Male/female</p>
                <p>Description</p>
                <Link to="/edit-pet"><button>Edit</button></Link>
            </div>
            </div>
         );
    }
}
 
export default Pet;