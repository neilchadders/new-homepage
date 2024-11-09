import './title.styles.css'
import { Link,  } from "react-router-dom"
import {DarkModeContext} from '../../context/DarkModeContext';
import { useContext } from 'react';



const Title = () => {

    const {darkMode} = useContext(DarkModeContext);

    return (
        <div id="title" className={darkMode ? `Container-light`: `Container-dark`}>
     <Link to='/' className={darkMode ? `Container-light`: `Container-dark`}><h1>Neil_C</h1></Link>
     <Link  to='/' className={darkMode ? `Container-light`: `Container-dark`} ><h2>Developer</h2></Link>
        </div>
    )
}

export default Title

