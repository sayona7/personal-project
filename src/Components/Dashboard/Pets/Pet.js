import React, { Component } from 'react';
import "./pets.css";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import "./pets.css";
import {getPet, addPet, updatePetArr} from "../../../redux/petReducer";

class Pet extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            age: "",
            breed: "",
            gender: "",
            imgUrl: "",
            description: ""
         }
    }
    

    render() { 
        return ( 
            <div className="pets-Wrapper">
            <img src="https://via.placeholder.com/150" alt="animal" />
            <div className="petInfo">
                <p>
                    Name:
                    <input name='name' onChange={this.handleInput} />
                </p>
                <p>
                    Age:
                    <input name="age" onChange={this.handleInput} />
                    </p>
                <p>
                    Breed:
                    <input name='breed' onChange={this.handleInput} />
                    </p>
                <p>
                    Male/female:
                    <input name='gender' onChange={this.handleInput} />
                </p>
                <p>
                    Image URL:
                    <input name='imgUrl' onChange={this.handleInput} />
                </p>
                <p>
                    Description:
                    <input name='description' onChange={this.handleInput} />
                </p>
                
            </div>
            </div>
         );
    }
}
 
const mapStateToProps = reduxState => reduxState.petReducer;
 
export default connect(mapStateToProps, {getPet, updatePetArr, addPet})(Pet);