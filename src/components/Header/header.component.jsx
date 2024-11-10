import Title from '../Title/title.component.jsx'
import NewLinks from '../New-Links/new-links.component.jsx'
import Lightswitch from '../Lightswitch/lightswitch.component.jsx'

import './header.styles.css'


import { useContext } from 'react'
import {DarkModeContext} from '../../context/DarkModeContext';



const Header = () => {
    const {darkMode} = useContext(DarkModeContext);
    return (
        <div id='header' className={darkMode ? `Container-light`: `Container-dark`} >
            <Title />
            <NewLinks />
            <Lightswitch />
        </div>
    )
}

export default Header