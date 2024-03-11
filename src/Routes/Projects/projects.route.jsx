import "./projects.styles.css"

import { useState } from 'react';


import Header from '../../components/Header/header.component.jsx'
import SearchBox from "../../components/SearchBox/search-box.component.jsx"
import CardList from "../../components/CardList/cardlist.component.jsx"
import projectArr from './projects';



const Projects = () =>{

  const [searchField, setSearchField] = useState('')



  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  const filteredProjects = projectArr.filter((project) => {
    return project.name.toLowerCase().includes(searchField);
  })

    return (
        <>
        <Header />

        <a href = "https://hardcore-ritchie-17f9e3.netlify.app/" rel = "noreferrer" target="_blank">Exercise Countdown (new tab)</a>
        <SearchBox className="" placeholder="search projects" onChangeHandler={onSearchChange}/>
        <CardList projects = {filteredProjects} />



        </>
    )
}

export default Projects