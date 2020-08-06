import React, { Component } from 'react';
import "./pets.css";
import {connect} from "react-redux";
import "./pets.css";
import {getPet, addPet, updatePetArr, deletePet} from "../../../redux/petReducer";
import axios from 'axios';

class Pet extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pet_id: this.props.pet_id,
            name: this.props.name,
            age: this.props.age,
            breed: this.props.breed,
            gender: this.props.gender,
            imgUrl: "",
            description: this.props.description
         }
    }
    
   
    deletePet = () => {
        const pet_id = this.props.pet_id;
        axios.delete(`/api/pet/${pet_id}`)
        .then((res) => {
            this.props.updatePetArr(res.data);
        })
        .catch(err => console.log(err));

    }

    render() { 
        return ( 
            <div className="separator">
                <div className="pets-Wrapper">
                    <img src="https://via.placeholder.com/150" alt="animal" />
                    <div className="petInfo">
                        <p>
                            Name: {this.state.name}
                        </p>
                        <p>
                            Age: {this.state.age}
                            </p>
                        <p>
                            Breed: {this.state.breed}
                            </p>
                        <p>
                            Male/female: {this.state.gender}
                        </p>
                        <p>
                            Image URL:
                        </p>
                        <p>
                            Description: {this.state.description}
                        </p>
                        
                    </div>
                    <button>Edit</button>
                    <button onClick={this.deletePet}>Delete</button>
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = reduxState => reduxState.petReducer;
 
export default connect(mapStateToProps, {getPet, updatePetArr, addPet, deletePet})(Pet);