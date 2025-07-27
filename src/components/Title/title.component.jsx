import './title.styles.css'
import { Link,  } from "react-router-dom"
import {DarkModeContext} from '../../context/DarkModeContext';
import { useContext } from 'react';



const Title = () => {

      const { darkMode } = useContext(DarkModeContext);
  const containerClass = darkMode ? 'Container-light' : 'Container-dark';

    return (
        <div id="title" className={containerClass}>
     <Link to='/' className={containerClass}><h1>Neil_C</h1></Link>
     <Link  to='/' className={containerClass}><h2>Developer</h2></Link>
        </div>
    )
}

export default Title

