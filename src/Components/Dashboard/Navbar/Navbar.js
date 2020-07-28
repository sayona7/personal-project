import React, { Component } from 'react';
import "./navbar.css";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class Navbar extends Component {
    render () {
        return (
            <nav>
                <div className="nav-links">
                    <div>
                        <Link to="/about" className="links">About</Link>
                        <Link to="/chat" className="links">Chat</Link>
                    </div>
                    <div className="nav-profile">
                        <div>
                            <p>Welcome {this.props.user.name}</p>
                            <button id="nav-btn">Logout</button>
                        </div>
                        <div id="nav-img-div">
                            <img src={this.props.user.profile_pic} alt="profile" id="nav-pic"/>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = reduxState => reduxState.reducer;
 
export default connect(mapStateToProps)(Navbar);