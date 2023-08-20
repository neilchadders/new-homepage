import "./links.styles.css"

const Links = () => {
    return (
        <div id="links">
            <a href='#about' className="link-hov">aboutMe <span className="pipe">|</span></a>
            <a href='#about' className="link-hov">someProjects <span className="pipe">|</span></a>
            <a href='#projects' className="link-hov">myBlog <span className="pipe">|</span></a>
            <a href="blog" className="link-hov">contactMe<span className="pipe">|</span></a>
        </div>
    )
}

export default Links