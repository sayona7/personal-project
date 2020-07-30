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
            username: ""
        }
    }

    handleEditView = () => {
        this.setState({editView: !this.state.editView});
    }

    handleInput = (val) => {
        this.setState({username: val});
    }

    updateUsername = () => {
        const {username} = this.state;

        axios.put(`/api/user/${this.props.user.user_id}`, {username})
        .then(res => {
            console.log(res.data);
            this.props.getUser(res.data[0]);
            console.log("working")
            this.handleEditView();
            this.setState({username: ""});
        })
        .catch(err => console.log(err));
    }

    render() { 
        return ( 
            <div>
                <Navbar />
                <div className="edit-wrapper">
                    <p>Profile photo</p>
                    <img src={this.props.user.profile_picture} alt={this.props.user.username}/>
                    <button>Upload</button>
                </div>
                <div className="edit-wrapper">
                    <h3>Information</h3>
                    {!this.state.editView
                    ? <p>Name:{this.props.user.username}<button onClick={this.handleEditView}>Edit</button></p>
                    : (<div>
                        <input 
                            value={this.state.username}
                            placeholder="Enter new name"
                            onChange={(e) => this.handleInput(e.target.value)}
                            />
                            <button onClick={this.updateUsername}>Submit</button>
                    </div>)}
                    
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
 
export default connect(mapStateToProps, {getUser})(EditProfile);