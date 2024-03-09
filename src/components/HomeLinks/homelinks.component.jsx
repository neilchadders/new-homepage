import "./homelink.styles.css"
import { Link,  } from "react-router-dom"

import React, {useContext} from 'react';

import {DarkModeContext} from '../../context/DarkModeContext';

const HomeLinks = () => {

    const {darkMode} = useContext(DarkModeContext);

    return (
        <div id = "home-links"className={darkMode ? `Container-light`: `Container-dark`}>
            <Link className="home-link-hov" to='/aboutMe'>aboutMe</Link>
                <span className="home-pipe">||</span>
            
            <Link className="home-link-hov" to='/someProjects'>someProjects</Link>
                <span className="home-pipe">||</span>
            
               
            <Link className="home-link-hov" to='/myBlog'>myBlog</Link>
                <span className="home-pipe">||</span>
            
            <Link className="home-link-hov" to='/contactMe'>contactMe</Link>
            
         {/*

            <input type="checkbox" id="hamburger-input" className="burger-shower" />
            <label id="hamburger-menu" htmlFor="hamburger-input">
                <nav id="sidebar-menu">
                    <h3>Menu</h3>
                    <ul>
                        <li><Link className="list" to='/aboutMe'>aboutMe</Link></li>
                        <li><Link className="list" to='/someProjects'>someProjects</Link></li>
                        <li><Link className="list" to='/myBlog'>myBlog</Link></li>
                        <li><Link className="list" to='/contactMe'>contactMe</Link></li>
                    </ul>
                </nav>
            </label>

            <div className="overlay"></div>*/}
    </div> 
    )
}

export default HomeLinks




       