import React, {Component} from  "react";
import {connect} from "react-redux";
import {getUser} from "../../../redux/reducer";
import Navbar from "../Navbar/Navbar";
import "./profile.css";
import axios from "axios";

class EditProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            editView: false,
            editEmail: false,
            editPhone: false,
            editAddress: false,
            editPassword: false,
            editBirthday: false,
            username: "",
            email: "",
            phone_number: "",
            address: "",
            password: "",
            birthday: ""
        }
    }

    // EDIT VIEWS
    handleEditView = () => {
        this.setState({editView: !this.state.editView});
    }

    handleEditEmail = () => {
        this.setState({editEmail: !this.state.editEmail});
    }
    
    handleEditPhone = () => {
        this.setState({editPhone: !this.state.editPhone});
    }

    handleEditAddress = () => {
        this.setState({editAddress: !this.state.editAddress});
    }

    handleEditPassword = () => {
        this.setState({editPassword: !this.state.editPassword});
    }

    handleEditBirthday = () => {
        this.setState({editBirthday: !this.state.editBirthday});
    }

    // EDIT VIEWS

    // LOCAL STATE

    handleUsername = (val) => {
        this.setState({username: val});
    }

    handleEmail = (val) => {
        this.setState({email: val});
    }

    handlePhone = (val) => {
        this.setState({phone_number: val});
    }

    handleAddress = (val) => {
        this.setState({address: val});
    }

    handlePassword = (val) => {
        this.setState({password: val});
    }

    handleBirthday = (val) => {
        this.setState({birthday: val});
    }

    // LOCAL STATE

    // BACKEND CALLS

    updateUserInfo = () => {
        const {username, email, phone_number, address, password, birthday} = this.state;

        axios.put(`/api/user/${this.props.user.user_id}`, {username, email, phone_number, address, password, birthday})
        .then(res => {
            console.log(res.data);
            this.props.getUser(res.data[0]);
            this.setState({username: username});
        })
        .catch(err => console.log(err));
    }


    // BACKEND CALLS

    render() { 
        console.log(this.props.user);
        return ( 
            <div>
                <div className="edit-wrapper">
                    <p>Profile photo</p>
                    <img src={this.props.user.profile_picture} alt={this.state.username}/>
                    <button>Upload</button>
                </div>
                <div className="edit-wrapper">
                    <h3>Information</h3>

                    {/* Change username */}
                    {!this.state.editView
                    ? 
                    <div>
                        <p>Name: {this.state.username}</p>
                        <button onClick={this.handleEditView}>Edit</button>
                        </div>
                    : (
                    <div>
                        <input 
                            value={this.state.username}
                            placeholder="Enter new name"
                            onChange={(e) => this.handleUsername(e.target.value)}
                            />
                            <button onClick={this.handleEditView}>Submit</button>
                    </div>)}
                    
                    {/* Change email */}
                    {!this.state.editEmail
                    ? 
                    <div>
                        <p>Email: {this.state.email}</p>
                        <button onClick={this.handleEditEmail}>Edit</button>
                    </div>
                    : (
                        <div>
                            <input 
                            value={this.state.email}
                            placeholder="Enter new email"
                            onChange={(e) => this.handleEmail(e.target.value)}/>
                            <button onClick={this.handleEditEmail}>Submit</button>
                        </div>
                    )}
                    
                    {/* Change phone */}
                    {!this.state.editPhone
                    ?
                    <div>
                        <p>Phone number: {this.state.phone_number}</p>
                        <button onClick={this.handleEditPhone} >Edit</button>
                    </div>
                    : (
                        <div>
                            <input 
                            value={this.state.phone}
                            placeholder="Enter new phone number"
                            onChange={(e) => this.handlePhone(e.target.value)} />
                            <button onClick={this.handleEditPhone} >Submit</button>
                        </div>
                    )}

                    {/* Change address */}
                    {!this.state.editAddress
                    ?
                    <div><p>Address: {this.state.address}</p>
                    <button onClick={this.handleEditAddress}>Edit</button></div>
                    : (
                        <div>
                            <input 
                            value={this.state.address}
                            placeholder="Enter your address"
                            onChange={(e) => this.handleAddress(e.target.value)} />
                            <button onClick={this.handleEditAddress}>Submit</button>
                        </div>
                    )}
                    
                    {/* Change password */}
                    <p>Password:</p>
                    <button>Edit</button>

                    {/* Change birthday */}
                    {!this.state.editBirthday
                    ?
                    <div><p>Birthday: {this.state.birthday}</p>
                    <button onClick={this.handleEditBirthday}>Edit</button></div>
                    : (
                        <div>
                            <input 
                            value={this.state.birthday}
                            placeholder="Enter your birthday"
                            onChange={(e) => this.handleBirthday(e.target.value)} />
                            <button onClick={this.handleEditBirthday}>Submit</button>
                        </div>
                    )}
                    
                </div>
                <button onClick={this.updateUserInfo}>Save</button>
            </div>
         );
    }
}

const mapStateToProps = reduxState => reduxState.reducer;
 
export default connect(mapStateToProps, {getUser})(EditProfile);