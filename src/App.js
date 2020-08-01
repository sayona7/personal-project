import React from 'react';
import './App.css';
import routes from "./routes";
import {withRouter} from "react-router-dom";
import Navbar from './Components/Dashboard/Navbar/Navbar';

function App(props) {
  return (
    <div>
      {props.location.pathname === "/" ?
      null 
      : (
        <Navbar history={props.history}/>
      )}
      {routes}
      </div>
  );
}
 
export default withRouter(App);
