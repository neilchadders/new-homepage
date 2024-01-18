import "./links.styles.css"
import { Link,  } from "react-router-dom"

const Links = () => {



    return (
        <div id="links">
            <Link className="link-hov" to='/aboutMe'>aboutMe</Link>
                <span className="pipe">|</span>
            
            <Link className="link-hov" to='/someProjects'>someProjects</Link>
                <span className="pipe">|</span>
            
               
            <Link className="link-hov" to='/myBlog'>myBlog</Link>
                <span className="pipe">|</span>
            
            <Link className="link-hov" to='/contactMe'>contactMe</Link>
            
         

            <input type="checkbox" id="hamburger-input" className="burger-shower" />
            <label id="hamburger-menu" htmlFor="hamburger-input">
                <nav id="sidebar-menu">
                    <h3>Menu</h3>
                    <ul>
                        <li><a>aboutMe</a></li>
                        <li><a>someProjects</a></li>
                        <li><a>myBlog</a></li>
                        <li><a>contactMe</a></li>
                    </ul>
                </nav>
            </label>

            <div className="overlay"></div>
        </div>
    )
}

export default Links