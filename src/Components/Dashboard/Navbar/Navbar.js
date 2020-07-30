import React, { Component } from 'react';
import "./navbar.css";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getUser, clearUser} from "../../../redux/reducer";
import axios from 'axios';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
           
        }
    }

    handleLogout = () => {
        axios.get("/auth/logout")
        .then(() => {
            // clear the user from redux
            this.props.clearUser();
            // route the user back to landing
            this.props.history.push("/");
        }).catch(err => console.log(err));
    }

    render () {
        return (
            <nav>
                <div className="nav-links">
                    <div>
                        <Link to="/about" className="links">About</Link>
                        <Link to="/chat" className="links">Chat</Link>
                        <Link to="/dash" className="links">Dashboard</Link>
                    </div>
                    <div className="nav-profile">
                        <div>
                            <p>Welcome {this.props.user.name}</p>
                            
                        </div>
                        <div id="nav-img-div">
                            <img src={this.props.user.profile_pic} alt="profile" id="nav-pic"/>
                        </div>
                        <div>
                        <button id="nav-btn" onClick={this.handleLogout}>Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = reduxState => reduxState.reducer;
 
export default connect(mapStateToProps, {getUser, clearUser})(Navbar);