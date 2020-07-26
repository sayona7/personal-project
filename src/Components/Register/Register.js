import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="wrapper">
                <div className="login-box">
                    <div>
                        <h1 className="login-header">Sing up</h1>
                        <div className="inputs-box">
                            <p>Email:</p>
                            <input />
                            <p>Password:</p>
                            <input />
                        <div className="buttons-box">
                            <button className="buttons">Register</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Register;