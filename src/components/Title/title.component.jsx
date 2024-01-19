import './title.styles.css'
import { Link,  } from "react-router-dom"

const Title = () => {
    return (
        <div id="title">
     <Link className = "title" to='/'><h1>Neil Chadwick</h1></Link>
     <Link className = "title"  to='/'><h2>Web Developer</h2></Link>
        </div>
    )
}

export default Title