import "./quote-picasso.styles.css"

//import { useState, useEffect } from "react";
import React, {useContext} from 'react';

import {DarkModeContext} from '../../context/DarkModeContext';
import Lightswitch from "../Lightswitch/lightswitch.component";

const QuotePicasso = () => {
    const {darkMode} = useContext(DarkModeContext);

    return (
        <div id = "quote"className={darkMode ? `Container-light`: `Container-dark`}>
            <h1 className = "home-title">Neil_C</h1>
            <h2 className = "home-title" >Developer</h2>
            <p className ="quote-text">"Computers are useless. They can only give you answers".</p>
            <p className ="author"> - Pablo Picasso</p>

            <p className ="quote-text">"I dont know anything about art, but I like to build things with computers. Have a look at what I've done here, or even better contact me here.</p>
            <p className ="author"> - Me</p>

            <Lightswitch className = "toggle" />
        </div>
        
    )
}

export default QuotePicasso