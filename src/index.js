import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import App from './App';
import Home from './home';
import AboutMe from './about';
import Projects from './projects';
import Blog from './blog';


const rootElement = document.getElementById("root"); 

ReactDOM.render(
  <Router>
    <App />
    <Routes className="body">
      {/* <Route path="/" classname= 'click' element={<App />}> */}
        <Route path="/" classname= 'click' element={<Home />} />
        <Route path="AboutMe" classname= 'click' element={<AboutMe />} />
        <Route path="Projects" classname= 'click' element={<Projects />} />
        <Route path="Blog" classname= 'click' element={<Blog />} />
      {/* </Route>  */}
    </Routes>
  </Router>,
  rootElement
);