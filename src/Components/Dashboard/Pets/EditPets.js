import React, {Component} from  "react";
import {connect} from "react-redux";
import Navbar from "../Navbar/Navbar";
import "./pets.css";

class EditPets extends Component {


    render() { 
        return ( 
            <div>
                <Navbar />
                <div className="editpets-wrapper">
                    <div className="petsWrapper">
                        <p>Profile photo</p>
                        <img src={this.props.user.profile_pic} alt="placeholder"/>
                        <button>Upload</button>
                    </div>
                    
                    <div className="petsWrapper">
                        <h3>Information</h3>
                        <p>Name:</p>
                        <button>Edit</button>
                        <p>Age:</p>
                        <button>Edit</button>
                        <p>Breed</p>
                        <button>Edit</button>
                        <p>Gender</p>
                        <select>
                            <option>Female</option>
                            <option>Male</option>
                        </select>
                        <p>Description</p>
                        <button>Edit</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = reduxState => reduxState.reducer;
 
export default connect(mapStateToProps)(EditPets);