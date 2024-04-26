import "./quote-picasso.styles.css"

//import { useState, useEffect } from "react";
import React, {useContext} from 'react';

import {DarkModeContext} from '../../context/DarkModeContext';
import Lightswitch from "../Lightswitch/lightswitch.component";
import myPic from "./newme.jpeg"


const QuotePicasso = () => {
    const {darkMode} = useContext(DarkModeContext);

    return (
     
        <div id = "home-page" className={darkMode ? `Container-light`: `Container-dark`}>
            
        
        <div id = "quote" lassName={darkMode ? `Container-light`: `Container-dark`}>
          
        <div className = "flex-title">
                <h1 className = "home-title head">Hi, I'm Neil.</h1>
                <p className = "home-title text">Either on the front-end or back-end, I like building stuff.</p>
                <p className = "home-title text">Have a look at what <strong>I've done here,</strong> or even better <strong>contact me here.</strong></p>
                <Lightswitch className = "toggle" />
            </div>
            
                <div className="image">
                    <img className = "photo" src={myPic} alt="Logo" />
                </div>
        </div>
        
    </div>
        
    )
}

export default QuotePicasso