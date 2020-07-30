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
                        <img src={this.props.user.profile_pic} alt="profile" />
                        <p>Name: {this.props.user.name}</p>
                        <p>Email:</p>
                        <p>Phone number:</p>
                        <p>Address:</p>
                        <p>Password:</p>
                        <p>Birthday:</p>
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