import React from 'react';
import { Link, useNavigate } from "react-router-dom";
//import headShot from '../pictures/headshotSquare.jpeg';
import { GoDeviceMobile, GoMarkGithub, GoMail } from "react-icons/go";
import finalproject from '../images/final-project.png';
import tictactoe from '../images/tictactoe.png';
import weatherapp from '../images/weatherapp.png';



export default function Home() {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path='Projects'  
    navigate(path);
  }
  return (
    <>
    <div className="spacer"></div>
    <div className="homePageContainer">
      <div className="homeLeft">
        <h1 className="homePageHeader">Chad Cooper</h1>
        <p className="homePageSubheader">Full Stack Web Developer </p>
        <div className="svgBlock">
          <Link className="svg" href="mailto:chadcooper06@gmail.com" ><img src={GoMail} width="60px" height="60px" alt="email" /></Link>
          <Link className="svg" href="https://github.com/chadcooper06" ><img src={GoMarkGithub} width="60px" height="60px" alt="github" /></Link>
          <Link className="svg" href="tel:+8596996947"><img src={GoDeviceMobile} width="60px" height="60px" alt="call me" /></Link>
        </div>
      </div>
      {/* <div className="homeRight">
        <img className="headShot" src={headShot} alt="headshot"></img>
      </div> */}
    </div>
        <h3 className="recentProjects">Recent Projects.</h3>
      <div className="belowTheFold">
        <div>
            <a href="https://hikers-haven.herokuapp.com/">
              <img className="projectDisplayHome" src={finalproject} alt="final project"></img>
            </a>
          <h4 className="projectTitle" >Hiker's Haven Forum</h4>
          <p className="projectDescription" >Fully functional online forum. <br/> Allows users to register, login and make posts. <br/> 
            React front end with Django REST API back end. </p>
        </div>
        <div >
          <a href="https://chadcooper06.github.io/Tic-Tac_Toe/">
            <img className="projectDisplayHome" src={tictactoe} alt="project"></img>
          </a>
          <h4 className="projectTitle" >Tic-Tac-Toe</h4>
          <p className="projectDescription" >Simple tic-tac-toe game using Object <br/> Oriented Programming and MVC framework.</p>
        </div>
        <div >
          <a href="https://chadcooper06.github.io/Weather-App/">
            <img className="projectDisplayHome" src={weatherapp} alt="project"></img>
          </a>
          <h4 className="projectTitle">Weather App</h4>
          <p className="projectDescription" >Displays current weather based on location. <br/>
            Uses Axios to fetch data and local storage to save that info. </p>
        </div>
      </div>
      <div className="see-more-btn-container">
        <button onClick={routeChange} className="see-more-projects">Other Projects</button>
      </div>
    </>
  )
}
