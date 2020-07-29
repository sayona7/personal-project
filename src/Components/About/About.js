import React, { Component } from 'react';
import Navbar from "../Dashboard/Navbar/Navbar";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <Navbar />
                <h1>About Veronica:</h1>
                <p>SAMPLE TEXT</p>
                <button>Back to Dashboard</button>
            </div>
         );
    }
}
 
export default About;