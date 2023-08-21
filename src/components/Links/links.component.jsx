import "./links.styles.css"

const Links = () => {
    return (
        <div id="links">
            <a href='#about' className="link-hov">aboutMe <span className="pipe">|</span></a>
            <a href='#projects' className="link-hov">someProjects <span className="pipe">|</span></a>
            <a href='#blog' className="link-hov">myBlog <span className="pipe">|</span></a>
            <a href="#contact" className="link-hov">contactMe</a>
        </div>
    )
}

export default Links