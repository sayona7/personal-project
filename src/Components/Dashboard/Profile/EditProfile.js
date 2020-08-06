import React, {Component} from  "react";
import {connect} from "react-redux";
import {getUser} from "../../../redux/reducer";
import "./profile.css";
import axios from "axios";
import Img from "../ImgUpload/Img";

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
            editPhoto: false,
            username: this.props.user.username,
            email: this.props.user.email,
            phone_number: this.props.user.phone_number,
            address: this.props.user.address,
            password: "",
            birthday: this.props.user.birthday
        }
    }

    componentDidMount() {

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

    handleEditPhoto = () => {
        this.setState({editPhoto: !this.state.editPhoto});
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
            // this.setState({username: this.props.user.username});
        })
        .catch(err => console.log(err));
    }

    // User Image Upload call

    // BACKEND CALLS

    render() { 
        console.log(this.props.user);
        return ( 
            <div className="edit-wrapper-m">
                <div className="edit-wrapper styled">
                    <h4>Profile photo</h4>
                    <img src={this.props.user.profile_picture} alt={this.state.username} className="edit-profile-photo"/>
                    {!this.state.editPhoto 
                    ?
                    <div>
                        <button onClick={this.handleEditPhoto}>Add a photo</button>
                    </div>
                    :
                    <div>
                        <Img/>
                    </div>
                     }
                    {/* <button>Upload</button> */}
                </div>

                <div className="edit-wrapper styled2">
                    <h4>Information</h4>

                    {/* Change username */}
                    {!this.state.editView
                    ? 
                    <div className="edit-wrapper-m centering-div">
                        <h4 className="edit-h4">Name: {this.props.user.username}</h4>
                        <button onClick={this.handleEditView} className="edit-profile-btn">Edit</button>
                        </div>
                    : (
                    <div className="edit-wrapper-m centering-div">
                        <h4 className="edit-h4">Name: {this.state.name}</h4>
                        <input 
                            value={this.state.username}
                            placeholder="Enter new name"
                            onChange={(e) => this.handleUsername(e.target.value)}
                            />
                            <button onClick={this.handleEditView} className="edit-profile-btn">Submit</button>
                    </div>)}
                    
                    {/* Change email */}
                    {!this.state.editEmail
                    ? 
                    <div className="edit-wrapper-m centering-div"> 
                        <h4 className="edit-h4">Email: {this.props.user.email}</h4>
                        <button onClick={this.handleEditEmail} className="edit-profile-btn">Edit</button>
                    </div>
                    : (
                        <div className="edit-wrapper-m centering-div">
                            <h4 className="edit-h4">Email: {this.state.email} </h4>
                            <input 
                            value={this.state.email}
                            placeholder="Enter new email"
                            onChange={(e) => this.handleEmail(e.target.value)}
                            />
                            <button onClick={this.handleEditEmail} className="edit-profile-btn">Submit</button>
                        </div>
                    )}
                    
                    {/* Change phone */}
                    {!this.state.editPhone
                    ?
                    <div className="edit-wrapper-m centering-div">
                        <h4 className="edit-h4">Phone number: {this.props.user.phone_number}</h4>
                        <button onClick={this.handleEditPhone} className="edit-profile-btn">Edit</button>
                    </div>
                    : (
                        <div className="edit-wrapper-m centering-div">
                            <h4 className="edit-h4">Phone number: {this.state.phone_number} </h4>
                            <input 
                            value={this.state.phone}
                            placeholder="Enter new phone number"
                            onChange={(e) => this.handlePhone(e.target.value)} />
                            <button onClick={this.handleEditPhone} className="edit-profile-btn">Submit</button>
                        </div>
                    )}

                    {/* Change address */}
                    {!this.state.editAddress
                    ?
                    <div className="edit-wrapper-m centering-div">
                        <h4 className="edit-h4">Address: {this.props.user.address}</h4>
                        <button onClick={this.handleEditAddress} className="edit-profile-btn">Edit</button>
                    </div>
                    : (
                        <div className="edit-wrapper-m centering-div">
                            <h4 className="edit-h4">Address: {this.state.address} </h4>
                            <input 
                            value={this.state.address}
                            placeholder="Enter your address"
                            onChange={(e) => this.handleAddress(e.target.value)} />
                            <button onClick={this.handleEditAddress} className="edit-profile-btn">Submit</button>
                        </div>
                    )}
                    
                    {/* Change password */}
                    <h4 className="edit-h4">Password:</h4>
                    <button className="edit-profile-btn">Edit</button>

                    {/* Change birthday */}
                    {!this.state.editBirthday
                    ?
                    <div className="edit-wrapper-m centering-div">
                        <h4 className="edit-h4">Birthday: {this.props.user.birthday}</h4>
                        <button onClick={this.handleEditBirthday} className="edit-profile-btn">Edit</button>
                    </div>
                    : (
                        <div className="edit-wrapper-m centering-div">
                            <h4 className="edit-h4">Birthday: {this.state.birthday} </h4>
                            <input 
                            value={this.state.birthday}
                            placeholder="Enter your birthday"
                            onChange={(e) => this.handleBirthday(e.target.value)} />
                            <button onClick={this.handleEditBirthday} className="edit-profile-btn">Submit</button>
                        </div>
                    )}
                    
                </div>
                <button onClick={this.updateUserInfo} className="edit-profile-btn">Save</button>
            </div>
         );
    }
}

const mapStateToProps = reduxState => reduxState.reducer;
 
export default connect(mapStateToProps, {getUser})(EditProfile);