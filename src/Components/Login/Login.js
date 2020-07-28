import React, { Component } from 'react';
import login from "./login.css";
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: "",
            password: "",
            loggedInUser: {},
         };
    }

    // handleLogin = () => {
    //     this.props.history.push("/dash");
    // }

    handleRegister = () => {
        this.props.history.push("/register");
    }

    login = () => {
        const {email, password} = this.state;
        // console.log(email, password);
        axios.post("/auth/login", {email, password})
        .then((res) => {
            this.setState({loggedInUser: res.data, email: "", password: ""});
            this.props.history.push("/dash");
            });
    }


    logout = () => {
        axios.get("auth/logout");
        this.setState({loggedInUser: {} });
    }

    render() {
        let {loggedInUser, email, password} = this.state; 
        return ( 
            <div className="wrapper"> 
                <div className="login-box">
                    <div>
                        <h1 className="login-header">Welcome!</h1>
                        <div className="inputs-box">
                            <p>Email</p>
                            <input
                            value={email}
                            type="text"
                            placeholder="Email"
                            onChange={(e) => this.setState({email: e.target.value})} />

                            <p>Password</p>
                            <input 
                            value={password}
                            type="password"
                            placeholder="Password"
                            onChange={(e) => this.setState({password: e.target.value})} />

                        </div>
                    </div>
                    <div className="buttons-box">
                        <button className="buttons" onClick={this.login} >Login</button>
                        <button className="buttons" onClick={this.handleRegister} >Register</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Login;