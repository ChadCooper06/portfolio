import React from 'react';
import { useNavigate } from "react-router-dom";
import headShot from '../pictures/headshotSquare.jpeg';
import github from '../pictures/Github.svg';
import email from '../pictures/Email.svg';
import instagram from '../pictures/Instagram.svg';
import phone from '../pictures/Phone.svg';
import finalproject from '../pictures/final-project.png';
import restaurant from '../pictures/restaurant.png';
import todolist from '../pictures/to-do-list.png';



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
          <a className="svg" href="mailto:chadcooper06@gmail.com" ><img src={email} width="60px" height="60px" alt="mail svg" /></a>
          <a className="svg" href="https://github.com/chadcooper06" ><img src={github} width="60px" height="60px" alt="github svg" /></a>
          <a className="svg" href="tel:+8596996947"><img src={phone} width="60px" height="60px" alt="phone svg" /></a>
        </div>
      </div>
      <div className="homeRight">
        <img className="headShot" src={headShot} alt="headshot"></img>
      </div>
    </div>
        <h3 className="recentProjects" >Recent Projects.</h3>
      <div className="belowTheFold">
        <div>
            <a href="https://mud-buds.herokuapp.com/">
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
