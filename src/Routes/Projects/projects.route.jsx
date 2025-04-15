import "./projects.styles.css"
import {useContext } from 'react';
import Header from '../../components/Header/header.component.jsx'
import CardList from "../../components/CardList/cardlist.component.jsx"

import projectArr from './projects';

import { DarkModeContext } from '../../context/DarkModeContext';



const Projects = () =>{
  const {darkMode} = useContext(DarkModeContext);
    return (
      <div id = "project" className={darkMode ? `Container-light`: `Container-dark`}>
        <Header />
        <CardList projects = {projectArr} className={darkMode ? `Container-light`: `Container-dark`}/>
      </div>
      
    )
}

export default Projects


