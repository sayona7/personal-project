import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import "./profile.css";

class Profile extends Component {

    render() { 
        return ( 
            <div >
                <div className="profileWrapper">
                    <div className="div-wr">
                        <img src={this.props.user.profile_picture} alt="img of the user" />
                        <p>Name: {this.props.user.username}</p>
                        <p>Email: {this.props.user.email}</p>
                        <p>Phone number: {this.props.user.phone_number}</p>
                        <p>Address: {this.props.user.address} </p>
                        <p>Password:</p>
                        <p>Birthday: {this.props.user.birthday}</p>
                    </div>
                    <div>
                        <button><Link to="/edit-profile" >Edit Info</Link></button>
                    </div>
                </div>
            </div>
         );
    }
}

const mapStateToProps = reduxState => reduxState.reducer;
 
export default connect(mapStateToProps)(Profile);