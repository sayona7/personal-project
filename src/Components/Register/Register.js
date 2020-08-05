import React, { Component } from 'react';
import axios from "axios";
import "./register.css";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: "",
            confirmedPassword: "",
            password: "",
            loggedInUser: {},
         };
    }

    singup = () => {
        // this.props.history.push("/register");
        const {email, password, confirmedPassword} = this.state;
        if (password !== confirmedPassword) {
            alert("Passwords don't match");
        } else {
        axios.post("/auth/singup", {email, password})
            .then((res) => {
                this.setState({loggedInUser: res.data, email: "", password: ""});
            });
        }
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

    render() { 
        let { email, password} = this.state; 
        return ( 
            <div className="register-wrapper">
                <div className="register-box">
                        <h1 className="login-header">Sing up</h1>
                        <div className="inputs-box">
                            <p>Email:</p>
                            <input
                            value={email}
                            type="text"
                            placeholder="Email"
                            onChange={(e) => this.setState({email: e.target.value})} />

                            <p>Password:</p>
                            <input 
                            value={password}
                            type="password"
                            placeholder="Password"
                            onChange={(e) => this.setState({password: e.target.value})} />

                            <p>Confirm password</p>
                            <input 
                            type="password"
                            placeholder="Retype password"
                            onChange={(e) => this.setState({confirmedPassword: e.target.value})}
                            />

                        <div className="buttons-box">
                            <button className="buttons" onClick={this.singup}>Register</button>
                            <button className="buttons" onClick={this.login} >Login</button>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Register;