import React from 'react';
import { Outlet, Link } from 'react-router-dom';



function App() {
  return (
    <div> 
        <div className='nav'> 
            <Link className="nav-link" to="/">HOME</Link> 
            <Link className="nav-link" to="/aboutMe">ABOUT ME</Link> 
            <Link className="nav-link" to="/projects">PROJECTS</Link> 
            <Link className="nav-link" to="/blog">BLOG</Link> 
        </div>
  <Outlet />
  </div>
  
  );
}
export default App;
