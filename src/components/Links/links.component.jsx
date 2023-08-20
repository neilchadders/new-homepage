import "./links.styles.css"

const Links = () => {
    return (
        <div id="links">
            <a href='#about' className="link-hov">aboutMe</a>
            <a href='#about' className="link-hov">someProjects</a>
            <a href='#projects' className="link-hov">myBlog</a>
            <a href="blog" className="link-hov">contactMe</a>
        </div>
    )
}

export default Links