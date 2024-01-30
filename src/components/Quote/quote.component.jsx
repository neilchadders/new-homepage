import "./quote.styles.css"
import { useState, useEffect } from "react";


const Quote = () => {

    const [theme, setTheme] = useState('light') // default set to light 

    const toggleTheme = () => {
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      };

      useEffect(() => {
        document.body.className = theme;
        return () => { document.body.className = ''; }
    });

    return (
        <div id="quote" className = {`Home ${'light'}`}>
            <p id="quote-text" className = {`Home ${'light'}`}><em>"Computers are useless. They can only give you answers".</em></p>
            <p id="author" {`Home ${'light'}`}> - Pablo Picasso</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
        
    )
}

export default Quote