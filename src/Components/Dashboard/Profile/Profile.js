import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import "./profile.css";
import "./styles.css";

class Profile extends Component {

    render() { 
        return ( <div className="profileWrapper">
            <div className="wrapper">
                <div className="left">
                    <img src="https://i.imgur.com/cMy8V5j.png" 
                    alt="user" width="150"/>

                    {this.props.user.username !== null ?
                    <h4>{this.props.user.username}</h4>
                    :
                    <h4>User</h4>
                    }
                    <p>Birthday: {this.props.user.birthday}</p>
                </div>
                <div className="right">
                    <div className="info">
                        <h3>Your Information</h3>
                        <div className="info_data">
                            <div className="data">
                                <h4>Email</h4>
                                <p>{this.props.user.email}</p>
                            </div>
                            <div className="data">
                            <h4>Phone</h4>
                                <p>{this.props.user.phone_number}</p>
                        </div>
                        </div>
                    </div>
                
                    <div className="projects">
                            <div className="projects_data">
                                <div className="data">
                                    <h4>Address</h4>
                                    <p>{this.props.user.address}</p>
                                </div>
                                <div className="data">
                                <h4>Password</h4>
                                    <p>{this.props.user.password}</p>
                            </div>
                            </div>
                        </div>
                    
                        <div className="social_media">
                           <button className="profile-btn"><Link to="/edit-profile" >Edit Info</Link></button>
                    </div>
                </div>
            </div>
        </div>
         );
    }
}

const mapStateToProps = reduxState => reduxState.reducer;
 
export default connect(mapStateToProps)(Profile);