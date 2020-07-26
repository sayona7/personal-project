import React, {Component} from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className="profileWrapper">
                    <div>
                        <img src="https://via.placeholder.com/150" alt="profile" />
                        <p>Name:</p>
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
 
export default Profile;