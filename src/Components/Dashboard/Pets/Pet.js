import React, { Component } from 'react';
import "./pets.css";
import {connect} from "react-redux";
import "./pets.css";
import {getPet, addPet, updatePetArr, deletePet} from "../../../redux/petReducer";
import axios from 'axios';
import "../Profile/styles.css";
import {Link} from "react-router-dom";

class Pet extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pet_id: this.props.pet_id,
            name: this.props.name,
            age: this.props.age,
            breed: this.props.breed,
            gender: this.props.gender,
            imgUrl: this.props.pet_photo,
            description: this.props.description,
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
                    {/* <div className="left-p">
                    <img src={this.state.imgUrl} alt="animal" class="pet-profile-photo"/>
                    </div>
                    
                    <div className="petInfo right wrapper">
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
                        
                    </div> */}


                    <div className="profileWrapper">
                        <div className="wrapper-p">
                            <div className="left-p">
                                <img src={this.state.imgUrl} 
                                alt="pet" width="350" className="pet-photo"/>
                            </div>

                            <div className="right-p">
                                <div className="info">
                                    <h3>{this.state.name}</h3>
                                    <div className="info_data">
                                        <div className="data">
                                            <h4>Age</h4>
                                            <p className="text-size">{this.state.age}</p>
                                        </div>
                                        <div className="data">
                                        <h4>Gender</h4>
                                            <p className="text-size">{this.state.gender}</p>
                                    </div>
                                    </div>
                                </div>
                            
                                <div className="projects">
                                        <div className="projects_data">
                                            <div className="data">
                                                <h4>Breed</h4>
                                                <p className="text-size">{this.state.breed}</p>
                                            </div>
                                            <div className="data">
                                            <h4>Description:</h4>
                                                <p className="text-size">{this.state.description}</p>
                                        </div>
                                        </div>
                                    </div>
                                
                                    <div className="social_media">
                                    <button className="pet-btn"><Link to="" >Edit Info</Link></button>
                                    <button onClick={() => this.deletePet()} className="pet-btn">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = reduxState => reduxState.petReducer;
 
export default connect(mapStateToProps, {getPet, updatePetArr, addPet, deletePet})(Pet);