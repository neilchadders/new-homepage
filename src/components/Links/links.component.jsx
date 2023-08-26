import "./links.styles.css"

const Links = () => {
    return (
        <div id="links">
            <a href='#about' className="link-hov">aboutMe <span className="pipe">|</span></a>
            <a href='#projects' className="link-hov">someProjects <span className="pipe">|</span></a>
            <a href='#blog' className="link-hov">myBlog <span className="pipe">|</span></a>
            <a href="#contact" className="link-hov">contactMe</a>

            <input type="checkbox" id="hamburger-input" class="burger-shower" />
            <label id="hamburger-menu" for="hamburger-input">
                <nav id="sidebar-menu">
                    <h3>Menu</h3>
                    <ul>
                        <li><a href="#">aboutMe</a></li>
                        <li><a href="#">someProjects</a></li>
                        <li><a href="#">myBlog</a></li>
                        <li><a href="#">contactMe</a></li>
                    </ul>
                </nav>
            </label>

            <div class="overlay"></div>
        </div>
    )
}

export default Links