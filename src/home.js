import React from 'react';
import { useNavigate } from "react-router-dom";
import finalproject from './images/finalproject.png';
import tictactoe from './images/tictactoe.png';
import weatherapp from './images/weatherapp.png';



export default function Home() {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path='Projects'  
    navigate(path);
  }
  return (
    <>
    <div className="homePageContainer">
      <div className="homeLeft">
        <h1 className="homePageHeader">Chad Cooper</h1>
        <p className="homePageSubheader">Full Stack Web Developer</p>
      </div>
      <div className="homeRight">
        <div className="headShot"></div>
      </div>
    </div>
        <h3 className="recentProjects">Recent Projects</h3>
      <div className="belowTheFold">
        <div className='card'>
          <a href="https://hikers-haven.herokuapp.com/">
            <img className="projectDisplayHome" src={finalproject} alt="final project"></img>
          </a>
          <div className='cardComment'>
            <h4 className="projectTitle">Hiker's Haven Forum</h4>
            <p className="projectDescription">Fully functional online forum. <br/> Allows users to register, login and make posts. <br/> 
              React front end with Django REST API back end. </p>
          </div>
        </div>
        <div className='card'>
          <div className='cardComment'>
            <h4 className="projectTitle1">Tic-Tac-Toe</h4>
            <p className="projectDescription1">Simple tic-tac-toe game using Object <br/> Oriented Programming and MVC framework.</p>
          </div>
          <a href="https://chadcooper06.github.io/Tic-Tac_Toe/">
            <img className="projectDisplayHome1" src={tictactoe} alt="project"></img>
          </a>
        </div>
        <div className='card'>
          <a href="https://chadcooper06.github.io/Weather-App/">
            <img className="projectDisplayHome" src={weatherapp} alt="project"></img>
          </a>
          <div className='cardComment'>
            <h4 className="projectTitle">Weather App</h4>
            <p className="projectDescription">Displays current weather based on location. <br/>
              Uses Axios to fetch data and local storage to save that info. </p>
          </div>
        </div>
      </div>
      <div className="seeMore">
        <button onClick={routeChange} className="seeMoreBtn">Other Projects</button>
      </div>
    </>
  )
}
