import React from 'react';
import finalproject from './images/finalproject.png';
import restaurant from './images/restaurant.png';
import todolist from './images/to-do-list.png';
import tictactoe from './images/tictactoe.png';
import weatherapp from './images/weatherapp.png';
import evercraft from './images/evercraft.png';

export default function Projects() {
  return (
    <div className="projectPageDiv">
      <h3 className='projectPageTitle'>Projects</h3>
      <div className='projectContainer'>
        <h4 className="projectTitle">Hiker's Haven Forum</h4>
        <div className='project'>
          <p className="projectDescription">Fully functional online forum. <br/>
            Allows users to register, login and make posts. <br/>
            Provides resources to users to help them find places to hike such <br />
            as a map and articles/National Park Service Links. <br /> 
            Created using React front end with Django REST API back end. </p>
          <a href="https://hikers-haven.herokuapp.com/">
            <img className="projectDisplayHome" src={finalproject} alt="project"></img>
          </a>
        </div>
      </div>
      <div className='projectContainer'>
        <h4 className="projectTitle">React Restaurant</h4>
        <div className='project1'>
          <p className="projectDescription">A fake restaurant website. <br/>
            Multi-page site using routes to navigate between each page. <br />
            Shows only pertinent information from an API filled with various dishes and prices. <br />
            Created using React with hooks pulling info from an API.</p>
          <a href="https://chadcooper06/react-restaurant">
            <img className="projectDisplayHome" src={restaurant} alt="project"></img>
          </a>
        </div>
      </div>
      <div className='projectContainer'>
        <h4 className="projectTitle">To Do List</h4>
        <div className='project'>
          <p className="projectDescription">To-do-list webpage dynamically rendered <br/> 
            using React Components. Allows users to create new to-do items and delete previously added items. <br />
            Dynamically adds to the current list of to-do items and renders as an extension of the "paper".</p>
          <a href="https://chadcooper06.github.io/to-do-list/">
            <img className="projectDisplayHome" src={todolist} alt="project"></img>
          </a>
        </div>
      </div>
      <div className='projectContainer'>
        <h4 className="projectTitle">Tic-Tac-Toe</h4>
        <div className='project1'>
          <p className="projectDescription">Simple tic-tac-toe game that allows users to play the <br/>
            classic game with another player by taking turns clicking on squares to place X or O. <br />
            Game displays which player won after the win conditions are met.<br />
            Created using Object Oriented Programming and MVC framework.</p>
          <a href="https://chadcooper06.github.io/Tic-Tac_Toe/">
            <img className="projectDisplayHome" src={tictactoe} alt="project"></img>
          </a>
        </div>
      </div>
      <div className='projectContainer'>
        <h4 className="projectTitle">Weather App</h4>
        <div className='project'>
          <p className="projectDescription">Displays current weather based on location provided by user. <br/>
            Created using JavaScript and uses Axios to fetch weather data from a weather API. <br />
            Local storage is used to save that info in the browser to prevent further API requests for the same location. </p>
          <a href="https://chadcooper06.github.io/Weather-App/">
            <img className="projectDisplayHome" src={weatherapp} alt="project"></img>
          </a>
        </div>
      </div>
      <div className='projectContainer'>
        <h4 className="projectTitle">Python-Evercraft</h4>
        <div className='project1'>
          <p className="projectDescription">RPG game created using Test Driven Development. <br />
            Similar to D&D, the characters in this game fall into various categories and have items, <br />
            weapons, hit points, damage and armor. This project contained multiple iterations of testing with <br />
            each test being created to fail and then code written to ensure the test is passed. </p>
          <a href="https://github.com/ChadCooper06/python-evercraft">
            <img className="projectDisplayHome" src={evercraft} alt="project"></img>
          </a>
        </div>
      </div>
    </div>
  )
}
