import "./quote-me.styles.css"

//import { useState, useEffect } from "react";
import React, {useContext} from 'react';


import {DarkModeContext} from '../../context/DarkModeContext';

const QuoteMe= () => {
    const {darkMode} = useContext(DarkModeContext);

    return (
        <div id = "quote-me" className={darkMode ? `Container-light`:`Container-dark`}>
            <p id="quote-text-me" className={darkMode ? `Container-light`:`Container Container-dark`}>"I dont know anything about art, but I like to build things with computers. Have a look at what I've done here, or even better contact me here.</p>
            <p id="author-me" className={darkMode ? `Container-light`: `Container-dark`}> - Me</p>
        </div>
        
    )
}

export default QuoteMe