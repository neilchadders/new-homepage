import "./projects.styles.css"
import {useContext } from 'react';
import Header from '../../components/Header/header.component.jsx'
import CardList from "../../components/CardList/cardlist.component.jsx"
import Footer from '../../components/Footer/footer';

import projectArr from './projects';

import { DarkModeContext } from '../../context/DarkModeContext';
import { Link } from "react-router-dom";



const Projects = () =>{
  const {darkMode} = useContext(DarkModeContext);
    return (
      <div id = "project" className={darkMode ? `Container-light`: `Container-dark`}>
        <Header />
        <CardList projects = {projectArr} className={darkMode ? `Container-light`: `Container-dark`}/>
        <div className="current-projects">
          <h2 className="current-title">Current Projects.....</h2>
          <p className="current-description">A Next.js ecommerce app app with TypeScript, Tailwind, Zod and Postgres. Here is the <Link to = "https://next-app-pi-taupe-62.vercel.app/">site</Link> here is the
          <Link to = "https://github.com/neilchadders/next-2" className="project-link">Github</Link></p>
          <p className="project-description">An API using C# and Entity Framework. Please see <Link to = "https://github.com/neilchadders/MyEmptyWebApp" className="project-link">Github</Link></p>
        </div> 
        <Footer />
      
      </div>
      
    )
}

export default Projects


