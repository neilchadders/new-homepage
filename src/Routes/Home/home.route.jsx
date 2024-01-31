import Header from '../../components/Header/header.component.jsx'
import './home.styles.css'
import Quote from '../../components/Quote/quote.component.jsx'
import { useState, useEffect } from 'react'





const Home = () =>{

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
      }, [theme]);

    return (
       
        <div className = {`Home ${'light'}`}>
        <Header />
        <Quote />
        <button onClick={toggleTheme}>Toggle Theme</button>
       
        </div>
    )
}

export default Home