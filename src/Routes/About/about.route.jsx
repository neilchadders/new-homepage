import "./about.styles.css"

import Header from '../../components/Header/header.component.jsx'
import Type from '../../components/Type/type.component.jsx'
import Bio from '../../components/Bio/bio.component.jsx'


const About = () =>{
    return (
        <div>
        <Header className = "header"/>
        <Type className = "Type"/>
        <Bio className = "Bio"/>
        </div>
       
    )
}

export default About