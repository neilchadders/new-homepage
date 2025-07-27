
import "./new-links.styles.css"
import { Link,  } from "react-router-dom"

import React, {useContext} from 'react';

import {DarkModeContext} from '../../context/DarkModeContext';

const NewLinks = () => {

     const { darkMode } = useContext(DarkModeContext);
  const containerClass = darkMode ? 'Container-light' : 'Container-dark';

    return (
        <div id = "home-links"className={containerClass}>
            <Link className="home-link-hov" to='/aboutMe'>aboutMe</Link>
                <span className="home-pipe">||</span>
            
            <Link className="home-link-hov" to='/someProjects'>someProjects</Link>
                <span className="home-pipe">||</span>
            
        
            <Link className="home-link-hov" to='/contactMe'>contactMe</Link>
                
    </div> 
    )
}

export default NewLinks