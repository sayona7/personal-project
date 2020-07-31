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
            phone: "",
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
        this.setState({phone: val});
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
        const {phone} = this.state;

        axios.put(`/api/user/${this.props.user.user_id}/phone`, {phone})
        .then(res => {
            this.props.getUser(res.data[0]);
            this.handleEditPhone();
            this.setState({email: ""});
        })
    }
    // BACKEND CALLS

    render() { 
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
                    
                    {!this.state.editPhone
                    ?
                    <div>
                        <p>Phone number: {this.props.user.phone}</p>
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
 
export default connect(mapStateToProps, {getUser})(EditProfile);