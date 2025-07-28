
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';

import "./lightswitch.styles.css"

function Lightswitch() {

    const { darkMode, toggleDarkMode } = useContext(DarkModeContext); //Destructures

    // Handle click event by calling the toggle function from context
    const handleClick = () => {
        toggleDarkMode();
    }

    return (
        // Apply conditional class based on current theme (dark or light)
        <div className={darkMode ? `toggle-position Container Container-light` : `toggle-position Container Container-dark`}>
            {/* Checkbox input to act as the toggle switch */}
            <input 
                type="checkbox" 
                id="toggle" 
                className="toggleCheckbox" 
                onClick={handleClick} 
            />
            {/* Label styled to look like a toggle switch; links to the checkbox */}
            <label htmlFor="toggle" className='toggleContainer'>
                <div>Light Mode</div>
                <div>Dark Mode</div>
                
            </label>
        </div>
    );
}


export default Lightswitch;
