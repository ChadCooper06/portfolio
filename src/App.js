import React from 'react';
import { Outlet, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import logo from './pictures/logo.png'



function App() {
  return (
    <div> 
      <Router>
        <Routes> 
            {/* <img className="logo" src={logo} alt="logo"></img> */}
            <Route className="nav-link" to="/">HOME</Route> 
            <Route className="nav-link" to="/aboutMe">ABOUT ME</Route> 
            <Route className="nav-link" to="/projects">PROJECTS</Route> 
            <Route className="nav-link" to="/blog">BLOG</Route> 
        </Routes>
      </Router>
  <Outlet />
  </div>
  
  );
}
export default App;
