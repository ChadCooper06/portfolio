import React from 'react';
import finalproject from '../images/final-project.png';
import restaurant from '../images/restaurant.png';
import todolist from '../images/to-do-list.png';
import tictactoe from '../images/tic-tac-toe.png';
import weatherapp from '../images/weather-app.png';
import evercraft from '../images/evercraft.png';

export default function Projects() {
  return (
    <div className="projectPageDiv">
      <div>
        <a href="https://hikers-haven.herokuapp.com/">
          <img className="projectDisplayHome" src={finalproject} alt="project"></img>
        </a>
        <h4 className="projectTitle" >Hiker's Haven Forum</h4>
        <p className="projectDescription" >Fully functional online forum. <br/> Allows users to register, login and make posts. <br/> 
            React front end with Django REST API back end. </p>
      </div>
      <div>
        <a href="https://github.com/ChadCooper06/react-restaurant">
          <img className="projectDisplayHome" src={restaurant} alt="project"></img>
        </a>
        <h4 className="projectTitle">React Restaurant</h4>
        <p className="projectDescription" >A fake restaurant website. <br/>
            React with hooks pulling info from an API.</p>
      </div>
      <div>
        <a href="https://chadcooper06.github.io/to-do-list/">
          <img className="projectDisplayHome" src={todolist} alt="project"></img>
        </a>
        <h4 className="projectTitle">To Do List</h4>
        <p className="projectDescription" >To-do-list webpage dynamically rendered <br/> using React Components.</p>
      </div>
      <div >
        <a href="https://chadcooper06.github.io/Tic-Tac_Toe/">
          <img className="projectDisplayHome" src={tictactoe} alt="project"></img>
        </a>
        <h4 className="projectTitle">Tic-Tac-Toe</h4>
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
      <div >
        <a href="https://github.com/ChadCooper06/python-evercraft">
          <img className="projectDisplayHome" src={evercraft} alt="project"></img>
        </a>
        <h4 className="projectTitle">Python-Evercraft</h4>
        <p className="projectDescription" >RPG game created using Test Driven Development. </p>
      </div>
    </div>
  )
}
