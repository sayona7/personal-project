import React, {Component} from  "react";
import {connect} from "react-redux";
import "./pets.css";

class EditPets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editNameView: false,
            editAgeView: false,
            editBreedView: false,
            editGenderView: false,
            editDescriptionView: false,
            name: "",
            age: null,
            breed: "",
            gender: "",
            description: ""
        }
    }


    // INPUT FUNCTION //
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    // VIEW TOGGLES //
    handleNameView = () => {
        this.setState({editNameView: !this.state.editNameView});
    }

    handleAgeView = () => {
        this.setState({editAgeView: !this.state.editAgeView});
    }

    handleBreedView = () => {
        this.setState({editBreedView: !this.state.editBreedView});
    }

    handleGenderView = () => {
        this.setState({editGenderView: !this.state.editGenderView});
    }

    handleDescriptionView = () => {
        this.setState({editDescriptionView: !this.state.editDescriptionView});
    }

    render() { 
        return ( 
            <div>

                <div className="editpets-wrapper">

                    <div className="petsWrapper">
                        <p>Profile photo</p>
                        <img src="" alt="placeholder"/>
                        <button>Upload</button>
                    </div>
                    
                    <div className="petsWrapper">
                        <h3>Information</h3>

                        {!this.state.editNameView 
                        ? 
                        <div>
                            <h4>Name: {this.props.pet.name}</h4>
                            <button onClick={this.handleNameView}>Edit</button>
                        </div>
                        :
                        <div>
                            <h4>Name:</h4>
                            <input name='name' onChange={this.handleInput} />
                            <button>Save</button>
                        </div>
                        }

                        {!this.state.editAgeView
                        ?
                        <div>
                            <h4>Age: {this.props.pet.age}</h4>
                            <button onClick={this.handleAgeView}>Edit</button>
                        </div>
                        :
                        <div>
                            <h4>Age:</h4>
                            <input name="age" onChange={this.handleInput} />
                            <button>Save</button>
                        </div>
                        }

                        {!this.state.editBreedView 
                        ?
                        <div>
                            <h4>Breed: {this.props.pet.breed}</h4>
                            <button onClick={this.handleBreedView}>Edit</button>
                        </div>
                        :
                        <div>
                            <h4>Breed:</h4>
                            <input name='breed' onChange={this.handleInput} />
                            <button>Save</button>
                        </div>
                        }

                        {!this.state.editGenderView 
                        ?
                        <div>
                            <h4>Gender: {this.props.pet.gender}</h4>
                            <button onClick={this.handleGenderView}>Edit</button>
                        </div>
                        :
                        <div>
                            <h4>Gender:</h4>
                            <input name='gender' onChange={this.handleInput} />
                            <button>Save</button>
                            {/* <select>
                            <option>Female</option>
                            <option>Male</option>
                            </select> */}
                        </div>
                        }
                        
                        {!this.state.editDescriptionView 
                        ?
                        <div>
                            <h4>Description: {this.props.pet.description}</h4>
                            <button onClick={this.handleDescriptionView}>Edit</button>
                        </div>
                        :
                        <div>
                            <h4>Description:</h4>
                            <input name='description' onChange={this.handleInput} />
                            <button>Save</button>
                        </div>
                        }

                    </div>
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = reduxState => reduxState.petReducer;
 
export default connect(mapStateToProps)(EditPets);