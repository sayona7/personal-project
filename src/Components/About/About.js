import React, { Component } from 'react';
import "./about.css";
import {Link} from "react-router-dom";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <div className="about-wrapper">
                <div id="about-title">
                    <h1 id="about-h1">About Veronica:</h1>
                </div>
                <article id="about-article">
                    <h3 id="article-h3">Dog Services in a Hidden Valley!</h3>
                    <p className="article-p">I have been taking care of dogs since a kid. I was raised with German Shepherds, boxers and mutts. Besides dogs I would always have some other animals like rabbits, hamsters, rats. I used to attend dog training to level up some obedience skills and got passionate about dog sports with my friend's border collie. I gained some professional experience with dog sitting in England, Poland and Germany.</p> 
                        <p className="article-p">Currently, me and my husband are living in a house in West South Austin (Lake Travis/Lakeway area) with a big backyard surrounded by nature, a lovely neighborhood to walk around and direct access to the Colorado River. Unfortunately he is allergic to cats so we cannot host any of them in our house, but I am willing to take care of them in the owner's house if there would be such a need. Due to covid, I am working from home, so your pets will be supervised and receive the best stay (lots of snuggles)</p>
                        <p className="article-p">About my house:</p>
                        <ul>
                            <li>Non-smoking household</li>
                            <li>No children</li>
                            <li>Unfenced yard</li>
                            <li>I don't have my own dogs</li>
                        </ul>
                        {/* Add house photos here */}
                        <p>What I provide to every dog staying with me:</p>
                        {/* List stuff I provide, walks, river, itp */}
                </article>
                <div id="iframe">
                    <iframe id="iframe-style" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8672.61692653297!2d-97.91478772375272!3d30.38701384008277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b312b990e950f%3A0xc863bf7d5b79dd90!2s13918%20Hummingbird%20Ln%2C%20Austin%2C%20TX%2078732!5e0!3m2!1sen!2sus!4v1596064709227!5m2!1sen!2sus" 
                        frameBorder= "0" 
                        allowFullScreen="" 
                        aria-hidden="false" 
                        tabIndex="0"
                        title="house" /> 
                </div>
                <Link to="/dash"><button id="about-btn">Back to Dashboard</button></Link>
                </div>
                <div>
                    <h3>Gallery</h3>
                    <p> Insert dog photos here </p> 
                </div>
            </div>
         );
    }
}
 
export default About;