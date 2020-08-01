import React, { Component } from 'react';
import "./pets.css";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import "./pets.css";
import Pet from "./Pet";
import axios from 'axios';
import {getPet} from "../../../redux/petReducer";

class Pets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pets: [],
            user_id: "",
            name: "",
        }
    }

    addPet = () => {
        const {user_id, name} = this.state;

        axios.post("/api/pet/add", {user_id, name})
        .then((res) => {
            this.props.getPet(res.data[0]);
        })
        
    }

    deletePet = () => {

    }


    render() { 
        const listedPets = this.state.pets.map((id, index) => (
                            <div>
                                <Pet key={index} id={id}/>
                                <button>Delete</button>
                            </div>
                        ))
        return ( 
            <div className="editpets-wrapper">
                {listedPets}     
                <button onClick={this.addPet}>Add your pet!</button>
            </div>
         );
    }
}
 
const mapStateToProps = reduxState => reduxState.petReducer;
 
export default connect(mapStateToProps, {getPet})(Pets);