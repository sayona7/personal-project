import React, { Component } from 'react';
import "./login.css";
import axios from "axios";
import {getUser} from "../../redux/reducer";
import {connect} from "react-redux";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: "",
            password: "",
            loggedInUser: {},
         };
    }


    handleRegister = () => {
        this.props.history.push("/register");
    }

    login = () => {
        const {email, password} = this.state;
        // console.log(email, password);
        axios.post("/auth/login", {email, password})
        .then((res) => {
            this.props.getUser(res.data);
            // this.setState({loggedInUser: res.data, email: "", password: ""});
            this.props.history.push("/dash");
            });
    }


    render() {
        let {email, password} = this.state; 
        return ( 
            <div className="wrapper loginWrapper"> 
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
 
export default connect(null, {getUser})(Login);