import "./quotes.styles.css"

//import { useState, useEffect } from "react";
import React, {useContext} from 'react';
import Lightswitch from '../Lightswitch/lightswitch.component';
import QuotePicasso from "../Quote-Picasso/quote-picasso.component";
import QuoteMe from "../Quote-Me/quote-me.component";

import {DarkModeContext} from '../../context/DarkModeContext';

const Quotes = () => {
    const {darkMode} = useContext(DarkModeContext);

    return (
        <div className={darkMode ? `quote-size Container-light`:`quote-size Container-dark`}>
            <QuotePicasso className = "quote-top"/>
            <Lightswitch className = "toggle" />
            <QuoteMe className = "quote-bottom"/>

        </div>
        
    )
}

export default Quotes