import React, {Component} from  "react";
import {connect} from "react-redux";
import Navbar from "../Navbar/Navbar";
import "./editProfile.css";

class EditProfile extends Component {

    render() { 
        return ( 
            <div>
                <Navbar />
                <div className="edit-wrapper">
                    <p>Profile photo</p>
                    <img src={this.props.user.profile_pic} alt="placeholder"/>
                    <button>Upload</button>
                </div>
                <div className="edit-wrapper">
                    <h3>Information</h3>
                    <p>Name: {this.props.user.name}</p>
                    <button>Edit</button>
                    <p>Email:</p>
                    <button>Edit</button>
                    <p>Phone number:</p>
                    <button>Edit</button>
                    <p>Address:</p>
                    <button>Edit</button>
                    <p>Password:</p>
                    <button>Edit</button>
                    <p>Birthday:</p>
                    <button>Edit</button>
                </div>
            </div>
         );
    }
}

const mapStateToProps = reduxState => reduxState.reducer;
 
export default connect(mapStateToProps)(EditProfile);