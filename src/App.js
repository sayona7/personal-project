import React from 'react';
import './App.css';
import routes from "./routes";
import {withRouter} from "react-router-dom";
import Navbar from './Components/Dashboard/Navbar/Navbar';
import {BreakpointProvider} from "react-socks";

function App(props) {
  return (
    <BreakpointProvider>
      <div>
        {props.location.pathname === "/" || props.location.pathname === "/register" ?
        null 
        : (
          <Navbar history={props.history}/>
        )}
        {routes}
        </div>
      </BreakpointProvider>
  );
}
 
export default withRouter(App);
