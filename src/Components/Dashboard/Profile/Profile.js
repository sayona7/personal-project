import React, {Component} from 'react';
import {connect} from "react-redux";

class Profile extends Component {

    render() { 
        return ( 
            <div>
                <div className="profileWrapper">
                    <div>
                        <img src="https://via.placeholder.com/150" alt="profile" />
                        <p>Name:{this.props.user.name}</p>
                        <p>Email:</p>
                        <p>Phone number:</p>
                        <p>Address:</p>
                        <p>Password:</p>
                        <p>Birthday:</p>
                    </div>
                    <div>
                        <button>Edit Info</button>
                    </div>
                </div>
            </div>
         );
    }
}

const mapStateToProps = reduxState => reduxState.reducer;
 
export default connect(mapStateToProps)(Profile);