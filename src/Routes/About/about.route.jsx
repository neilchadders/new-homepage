import "./about.styles.css"
import Header from '../../components/Header/header.component.jsx'
import Bio from '../../components/Bio/bio.component.jsx'
import { DarkModeProvider } from '../../context/DarkModeContext';



const About = () =>{
    return (
        <DarkModeProvider>   
        <Header />
        <Bio />
        </DarkModeProvider>   
       
    )
}

export default About