import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { GoMarkGithub, GoMail } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";



function App() {
  return (
    <div> 
      <div className='nav'>
        <div className='links'>
          <Link className="nav-link" to="/">HOME</Link> 
          <Link className="nav-link" to="/aboutMe">ABOUT ME</Link> 
          <Link className="nav-link" to="/projects">PROJECTS</Link> 
          <Link className="nav-link" to="/blog">BLOG</Link>
        </div> 
        <div className="iconBlock">
          <Link className="icon" to="mailto:chadcooper06@gmail.com" width="60px" height="60px" alt="email"><GoMail /></Link>
          <Link className="icon" to="https://github.com/chadcooper06" width="60px" height="60px" alt="github"><GoMarkGithub /></Link>
          <Link className="icon" to="https://www.linkedin.com/in/chad-cooper-dev/" width="60px" height="60px" alt="call me"><GrLinkedin /></Link> 
        </div>
      </div>
  <Outlet />
  </div>
  
  );
}
export default App;
