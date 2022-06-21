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
//import PythonBlog from './blogs/python';
//import FrontendFinishLineBlog from './blogs/frontendfinishline';
//import WelcometoReactBlog from './blogs/welcometoReact';
//import PushtheJSLimitsBlog from './blogs/pushthejslimits';
//import InPersonSprintBlog from './blogs/inpersonsprint';


const rootElement = document.getElementById("root"); 

render(
  <Browser>
    <Routes className="body">
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="AboutMe" element={<AboutMe />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Blog" element={<Blog />} />
{/*          <Route path="PythonBlog" element={<PythonBlog />} />
         <Route path="FrontendFinishLineBlog" element={<FrontendFinishLineBlog />} />
         <Route path="WelcometoReactBlog" element={<WelcometoReactBlog />} />
         <Route path="PushtheJSLimitsBlog" element={<PushtheJSLimitsBlog />} />
         <Route path="InPersonSprintBlog" element={<InPersonSprintBlog />} /> */}
      </Route> 
    </Routes>
    <footer className="footer">Contact me at: chadcooper06@gmail.com </footer>
  </Browser>,
  rootElement
);