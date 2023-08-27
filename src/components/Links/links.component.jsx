import "./links.styles.css"

const Links = () => {
    return (
        <div id="links">
            <a href='#about' className="link-hov">aboutMe</a>
            <span className="pipe">|</span>
            <a href='#projects' className="link-hov">someProjects</a>
            <span className="pipe">|</span>
            <a href='#blog' className="link-hov">myBlog</a>
            <span className="pipe">|</span>
            <a href="#contact" className="link-hov">contactMe</a>

            <input type="checkbox" id="hamburger-input" class="burger-shower" />
            <label id="hamburger-menu" for="hamburger-input">
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

            <div class="overlay" onClick={() => document.querySelector("hamburger-menu").add.style("hidden")}></div>
        </div>
    )
}

export default Links