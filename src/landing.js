import React from "react";
import './App.css';
//import "./LandingPage.css";
//import button {Button} from "react-bootstrap";

export default function LandingPage() {
return(
    <div className='landing'>
        <div className='landing-text'>
            <h1>Portfolio</h1>
            <p>Full Stack Web Developer</p>
            <Button variant="warning">Meet Me</Button>
        </div>
    </div>
)
}
