import Header from '../../components/Header/header.component.jsx'
import ContactForm from '../../components/ContactForm/contactForm.component.jsx'
import Footer from '../../components/Footer/footer.jsx'
import './contact.styles.css'
import { useContext } from 'react'
import {DarkModeContext} from '../../context/DarkModeContext';

const Contact = () => {
  const {darkMode} = useContext(DarkModeContext);
  const containerClass = darkMode ? `Container-light` : `Container-dark`;

    return (
        <div id ="contact-container" className={containerClass} >

            <Header title="Contact Me" />
            <ContactForm />
            <Footer />
        </div>
    )
}



export default Contact