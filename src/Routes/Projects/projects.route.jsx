import "./projects.styles.css"

import { useState } from 'react';

import { useContext } from "react";
import Header from '../../components/Header/header.component.jsx'
import SearchBox from "../../components/SearchBox/search-box.component.jsx"
import CardList from "../../components/CardList/cardlist.component.jsx"
import projectArr from './projects';

import { DarkModeProvider } from '../../context/DarkModeContext';


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
      <DarkModeProvider>
        <Header />


        <SearchBox className="" placeholder="search projects" onChangeHandler={onSearchChange}/>
        <CardList projects = {filteredProjects} />



        </DarkModeProvider>
    )
}

export default Projects