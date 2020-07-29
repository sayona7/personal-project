import React from "react";
import {Switch, Route} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import About from "./Components/About/About";
import EditProfile from "./Components/Dashboard/Profile/EditProfile";

export default (
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/dash" component={Dashboard} />
        <Route path="/register" component={Register} />
        <Route path="/about" component={About} />
        <Route path="/edit-profile" component={EditProfile} />
        <Route render={() => {
            return <div>Sorry, this page doesn't exist :/</div>
        }} />
    </Switch>
);