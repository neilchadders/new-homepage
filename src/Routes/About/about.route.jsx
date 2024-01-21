import "./about.styles.css"

import Header from '../../components/Header/header.component.jsx'
import Type from '../../components/Type/type.component.jsx'
import Bio from '../../components/Bio/bio.component.jsx'
import Photo from "../../components/Photo/photo.component.jsx"
//import Photo from '../../components/Photo/photo.component.jsx'


const About = () =>{
    return (
        <div>
        <Header className = "header"/>
        <Type className = "test Type"/>
        <Photo />
        <Bio className = "test Bio"/>
        </div>
       
    )
}

export default About