import React from 'react';
import { Outlet, Link, useHref } from 'react-router-dom';
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
          <Link className="icon" onPress={() => useHref.openURL("mailto:chadcooper06@gmail.com")} width="60px" height="60px" alt="email" target="_blank"><GoMail /></Link>
          <Link className="icon" onPress={() => useHref.openURL("https://github.com/chadcooper06")} width="60px" height="60px" alt="github" target="_blank"><GoMarkGithub /></Link>
          <Link className="icon" onProgress={() => useHref.openURL("https://www.linkedin.com/in/chad-cooper-dev/")} width="60px" height="60px" alt="call me" target="_blank"><GrLinkedin /></Link> 
        </div>
      </div>
  <Outlet />
  </div>
  
  );
}
export default App;
