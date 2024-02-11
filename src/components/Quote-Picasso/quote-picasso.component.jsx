import "./quote-picasso.styles.css"

//import { useState, useEffect } from "react";
import React, {useContext} from 'react';

import {DarkModeContext} from '../../context/DarkModeContext';

const QuotePicasso = () => {
    const {darkMode} = useContext(DarkModeContext);

    return (
        <div id = "quote"className={darkMode ? `Container-light`: `Container-dark`}>
            <p id="quote-text" className={darkMode ? `Container-light`:`Container Container-dark`}><em>"Computers are useless. They can only give you answers".</em></p>
            <p id="author" className={darkMode ? `Container-light`: `Container-dark`}> - Pablo Picasso</p>
        </div>
        
    )
}

export default QuotePicasso