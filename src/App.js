


import {Routes, Route } from "react-router-dom";

import Home from "./Routes/Home/home.route.jsx";

import './App.css';
import About from "./Routes/About/about.route.jsx";
import Projects from "./Routes/Projects/projects.route.jsx";
import Blog from "./Routes/Blog/blog.route.jsx";
import Contact from "./Routes/Contact/contact.route.jsx";





const App = () => {
  return (
  
    <Routes>
        <Route index element={<Home />} />
        <Route path='aboutMe' element={<About />} />
        <Route path='someProjects' element={<Projects />} />
        <Route path='myBlog' element={<Blog/>} />
        <Route path='contactMe' element={<Contact />} />
    </Routes>   
  
  );
}

export default App;
