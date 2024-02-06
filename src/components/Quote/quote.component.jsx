import "./quote.styles.css"
//import { useState, useEffect } from "react";
import React, {useContext} from 'react';
import Lightswitch from '../Lightswitch/lightswitch.component';
import {DarkModeContext} from '../../context/DarkModeContext';

const Quote = () => {
    const {darkMode} = useContext(DarkModeContext);

    return (
        <div id = "quote" className={darkMode ? `Container Container-dark` : `Container Container-light`}>
            <p id="quote-text" className={darkMode ? `Container Container-dark` : `Container Container-light`}><em>"Computers are useless. They can only give you answers".</em></p>
            <p id="author" className={darkMode ? `Container Container-dark` : `Container Container-light`}> - Pablo Picasso</p>

            <Lightswitch />
            
        </div>
        
    )
}

export default Quote