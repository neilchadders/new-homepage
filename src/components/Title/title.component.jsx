import './title.styles.css'
import { Link,  } from "react-router-dom"

const Title = () => {
    return (
        <div id="title">
     <Link className = "title" to='/'><h1>Neil_C</h1></Link>
     <Link className = "title"  to='/'><h2>Developer</h2></Link>
        </div>
    )
}

export default Title