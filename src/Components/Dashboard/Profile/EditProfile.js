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

    updateUsername = () => {
        const {username} = this.state;

        axios.put(`/api/user/${this.props.user.user_id}`, {username})
        .then(res => {
            console.log(res.data);
            this.props.getUser(res.data[0]);
            this.handleEditView();
            this.setState({username: ""});
        })
        .catch(err => console.log(err));
    }

    updateEmail = () => {
        const {email} = this.state;

        axios.put(`/api/user/${this.props.user.user_id}/email`, {email})
        .then(res => {
            this.props.getUser(res.data[0]);
            this.handleEditEmail();
            this.setState({email: ""});
        })
    }

    updatePhone = () => {
        const {phone_number} = this.state;

        axios.put(`/api/user/${this.props.user.user_id}/phone`, {phone_number})
        .then(res => {
            console.log(phone_number);
            this.props.getUser(res.data[0]);
            this.handleEditPhone();
            this.setState({phone: ""});
        })
    }

    updateAddress = () => {
        const {address} = this.state;

        axios.put(`/api/user/${this.props.user.user_id}/address`, {address})
        .then(res => {
            this.props.getUser(res.data[0]);
            this.handleEditAddress();
            this.setState({address: ""});
        })
    }

    updateBirthday = () => {
        const {birthday} = this.state;

        axios.put(`/api/user/${this.props.user.user_id}/birthday`, {birthday})
        .then(res => {
            this.props.getUser(res.data[0]);
            this.handleEditBirthday();
            this.setState({birthday: ""});
        })
    }
    // BACKEND CALLS

    render() { 
        console.log(this.props.user);
        return ( 
            <div>
                <Navbar history={this.props.history}/>
                <div className="edit-wrapper">
                    <p>Profile photo</p>
                    <img src={this.props.user.profile_picture} alt={this.props.user.username}/>
                    <button>Upload</button>
                </div>
                <div className="edit-wrapper">
                    <h3>Information</h3>

                    {/* Change username */}
                    {!this.state.editView
                    ? 
                    <div>
                        <p>Name: {this.props.user.username}</p>
                        <button onClick={this.handleEditView}>Edit</button>
                        </div>
                    : (
                    <div>
                        <input 
                            value={this.state.username}
                            placeholder="Enter new name"
                            onChange={(e) => this.handleUsername(e.target.value)}
                            />
                            <button onClick={this.updateUsername}>Submit</button>
                    </div>)}
                    
                    {/* Change email */}
                    {!this.state.editViewEmail
                    ? 
                    <div>
                        <p>Email: {this.props.user.email}</p>
                        <button onClick={this.handleEditEmail}>Edit</button>
                    </div>
                    : (
                        <div>
                            <input 
                            value={this.state.email}
                            placeholder="Enter new email"
                            onChange={(e) => this.handleEmail(e.target.value)}/>
                            <button onClick={this.updateEmail}>Submit</button>
                        </div>
                    )}
                    
                    {/* Change phone */}
                    {!this.state.editPhone
                    ?
                    <div>
                        <p>Phone number: {this.props.user.phone_number}</p>
                        <button onClick={this.handleEditPhone} >Edit</button>
                    </div>
                    : (
                        <div>
                            <input 
                            value={this.state.phone}
                            placeholder="Enter new phone number"
                            onChange={(e) => this.handlePhone(e.target.value)} />
                            <button onClick={this.updatePhone} >Submit</button>
                        </div>
                    )}

                    {/* Change address */}
                    {!this.state.editAddress
                    ?
                    <div><p>Address: {this.props.user.address}</p>
                    <button onClick={this.handleEditAddress}>Edit</button></div>
                    : (
                        <div>
                            <input 
                            value={this.state.address}
                            placeholder="Enter your address"
                            onChange={(e) => this.handleAddress(e.target.value)} />
                            <button onClick={this.updateAddress}>Submit</button>
                        </div>
                    )}
                    
                    {/* Change password */}
                    <p>Password:</p>
                    <button>Edit</button>

                    {/* Change birthday */}
                    {!this.state.editBirthday
                    ?
                    <div><p>Birthday: {this.props.user.birthday}</p>
                    <button onClick={this.handleEditBirthday}>Edit</button></div>
                    : (
                        <div>
                            <input 
                            value={this.state.birthday}
                            placeholder="Enter your birthday"
                            onChange={(e) => this.handleBirthday(e.target.value)} />
                            <button onClick={this.updateBirthday}>Submit</button>
                        </div>
                    )}
                    
                </div>
            </div>
         );
    }
}

const mapStateToProps = reduxState => reduxState.reducer;
 
export default connect(mapStateToProps, {getUser})(EditProfile);