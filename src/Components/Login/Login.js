import React, { Component } from 'react';
import login from "./login.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="wrapper"> 
                <div className="login-box">
                    <div>
                        <h1 className="login-header">Welcome!</h1>
                        <div className="inputs-box">
                            <p>Username</p><input />
                            <p>Password</p><input />
                        </div>
                    </div>
                    <div className="buttons-box">
                        <button className="buttons">Login</button>
                        <button className="buttons">Register</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Login;