import React, { Component } from 'react';
import "./pets.css";

class Pets extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
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
 
export default Pets;