import React, {Component} from  "react";
import {connect} from "react-redux";
import "./pets.css";
import {addPet} from "../../../redux/petReducer";

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

    handleSubmit = (e) => {
        this.props.addPet({...this.state});
        console.log(this.props);
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
                            <h4>Name: {this.state.name}</h4>
                            <button onClick={this.handleNameView}>Edit</button>
                        </div>
                        :
                        <div>
                            <h4>Name: {this.state.name}</h4>
                            <input
                            value={this.state.name} 
                            name='name' 
                            onChange={this.handleInput} />
                            <button onClick={this.handleNameView}>Save</button>
                        </div>
                        }

                        {!this.state.editAgeView
                        ?
                        <div>
                            <h4>Age: {this.state.age}</h4>
                            <button onClick={this.handleAgeView}>Edit</button>
                        </div>
                        :
                        <div>
                            <h4>Age: {this.state.age}</h4>
                            <input name="age" onChange={this.handleInput} />
                            <button onClick={this.handleAgeView}>Save</button>
                        </div>
                        }

                        {!this.state.editBreedView 
                        ?
                        <div>
                            <h4>Breed: {this.state.breed}</h4>
                            <button onClick={this.handleBreedView}>Edit</button>
                        </div>
                        :
                        <div>
                            <h4>Breed: {this.state.breed}</h4>
                            <input name='breed' onChange={this.handleInput} />
                            <button onClick={this.handleBreedView}>Save</button>
                        </div>
                        }

                        {!this.state.editGenderView 
                        ?
                        <div>
                            <h4>Gender: {this.state.gender}</h4>
                            <button onClick={this.handleGenderView}>Edit</button>
                        </div>
                        :
                        <div>
                            <h4>Gender: {this.state.gender}</h4>
                            <input name='gender' onChange={this.handleInput} />
                            <button onClick={this.handleGenderView}>Save</button>
                            {/* <select>
                            <option>Female</option>
                            <option>Male</option>
                            </select> */}
                        </div>
                        }
                        
                        {!this.state.editDescriptionView 
                        ?
                        <div>
                            <h4>Description: {this.state.description}</h4>
                            <button onClick={this.handleDescriptionView}>Edit</button>
                        </div>
                        :
                        <div>
                            <h4>Description: </h4>
                            <input name='description' onChange={this.handleInput} />
                            <button onClick={this.handleDescriptionView}>Save</button>
                        </div>
                        }

                    </div>
                    <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = reduxState => reduxState.petReducer;
 
export default connect(mapStateToProps, {addPet})(EditPets);