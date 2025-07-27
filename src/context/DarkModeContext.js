
import React, { createContext, useState } from 'react';

// Create THE context for dark mode, which can be accessed by child components
const DarkModeContext = createContext();

// Define the provider component that manages the dark mode state - This wraps the routes in index.js
function DarkModeProvider(props) {
    // Declare state variable for dark mode and initially set to false (light mode)
    const [darkMode, setDarkMode] = useState(false);

    // Function to toggle dark mode on or off
    const toggleDarkMode = () => {
        setDarkMode(!darkMode); // Flip the current state
    };

    // Return a context provider with the darkMode state and toggle function
    return (
        <div>
            <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
               
                {props.children}
            </DarkModeContext.Provider>
        </div>
    );
}

// Export both the context and the provider component
export { DarkModeContext, DarkModeProvider };
