import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Browser,
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

render(
  <Browser basename={process.env.PUBLIC_URL}>
    <Routes className="body">
      <Route path="/" classname= 'click' element={<App />}>
        <Route path="/" classname= 'click' element={<Home />} />
        <Route path="AboutMe" classname= 'click' element={<AboutMe />} />
        <Route path="Projects" classname= 'click' element={<Projects />} />
        <Route path="Blog" classname= 'click' element={<Blog />} />
      </Route> 
    </Routes>
    <footer className="footer">Contact me at: chadcooper06@gmail.com </footer>
  </Browser>,
  rootElement
);