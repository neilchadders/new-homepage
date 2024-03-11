import "./quote-picasso.styles.css"

//import { useState, useEffect } from "react";
import React, {useContext} from 'react';

import {DarkModeContext} from '../../context/DarkModeContext';
import Lightswitch from "../Lightswitch/lightswitch.component";

const QuotePicasso = () => {
    const {darkMode} = useContext(DarkModeContext);

    return (
        <div id = "quote"className={darkMode ? `Container-light`: `Container-dark`}>
            <div className = "flex-title">
                <h1 className = "home-title">Neil_C</h1>
                <h2 className = "home-title" >Developer</h2>
            </div>

            <div className = "flex-quote">
        
                <p className ="quote-text"><strong>"Computers are useless.</strong> They can only give you answers".</p>
                <p className ="author"> - Pablo Picasso</p>
            
                <p className ="quote-text">"I dont know anything about art, but I like to build things with computers. Have a look at what <strong>I've done here,</strong> or even better <strong>contact me here.</strong></p>
                <p className ="author"> - Me</p>

            <Lightswitch className = "toggle" />

            </div>
        </div>
        
    )
}

export default QuotePicasso