import Header from '../../components/Header/header.component.jsx'
import ContactForm from '../../components/ContactForm/contactForm.component.jsx'
import './contact.styles.css'
import { useContext } from 'react'
import {DarkModeContext} from '../../context/DarkModeContext';

const Contact = () => {
  const {darkMode} = useContext(DarkModeContext);
    return (
        <div id ="contact-container" className={darkMode ? `Container-light`: `Container-dark`} >
            <Header title="Contact Me" />
            <ContactForm />
        </div>
    )
}



export default Contact