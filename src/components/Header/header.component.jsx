import Title from '../Title/title.component.jsx'
import NewLinks from '../New-Links/new-links.component.jsx'

import './header.styles.css'



const Header = () => {
    return (
        <div id='header'>
            <Title />
            <NewLinks />
        </div>

    )
}

export default Header