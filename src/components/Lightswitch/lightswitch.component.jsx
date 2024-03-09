import React, {useContext} from 'react';
import {DarkModeContext} from '../../context/DarkModeContext';

import "./lightswitch.styles.css"

function Lightswitch() {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    const handleClick = () => {
        toggleDarkMode();
    }
    return (
        <div className={darkMode ? `toggle-position Container Container-light`:`toggle-position Container Container-dark`}>
        <input type="checkbox" id="toggle" className="toggleCheckbox" onClick={handleClick}/>
        <label htmlFor="toggle" className='toggleContainer'>
        <div>Dark Mode</div>
          <div>Picasso Mode</div>   
          
        </label>
        </div>
        

    )

       

}


export default Lightswitch