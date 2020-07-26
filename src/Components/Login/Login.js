import React, { Component } from 'react';
import login from "./login.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleLogin = () => {
        this.props.history.push("/dash");
    }

    handleRegister = () => {
        this.props.history.push("/register");
    }

    render() { 
        return ( 
            <div className="wrapper"> 
                <div className="login-box">
                    <div>
                        <h1 className="login-header">Welcome!</h1>
                        <div className="inputs-box">
                            <p>Email</p><input />
                            <p>Password</p><input />
                        </div>
                    </div>
                    <div className="buttons-box">
                        <button className="buttons" onClick={this.handleLogin} >Login</button>
                        <button className="buttons" onClick={this.handleRegister} >Register</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Login;