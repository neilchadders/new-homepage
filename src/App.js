

import {Routes, Route } from "react-router-dom";
import Home from "./Routes/Home/home.route.jsx";
import './App.css';
import About from "./Routes/About/about.route.jsx";
import Projects from "./Routes/Projects/projects.route.jsx";
import Contact from "./Routes/Contact/contact.route.jsx";

import ProjectOne from "./Projects/ProjectOne/projectOne.jsx";
import ProjectTwo from "./Projects/ProjectTwo/projectTwo.jsx";
import ProjectThree from "./Projects/ProjectThree/projectThree.jsx";


const App = () => {

  return (
    
    <Routes>
     
        <Route index element={<Home />} />
        <Route path='aboutMe' element={<About />} />
        <Route path='someProjects' element={<Projects />} />
        <Route path='projectOne' element={<ProjectOne />} />
        <Route path='projectTwo' element={<ProjectTwo />} />
        <Route path='projectThree' element={<ProjectThree />} />
        <Route path='contactMe' element={<Contact />} />
       
    </Routes>   
  
  );
}

export default App;
