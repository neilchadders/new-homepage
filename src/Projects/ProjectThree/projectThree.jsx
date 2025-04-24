import Header from '../../components/Header/header.component'
import Footer from '../../components/Footer/footer';
import './projectThree.css'

import { DarkModeContext } from '../../context/DarkModeContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const ProjectThree = () => {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div id="project-container" className={darkMode ? `Container-light` : `Container-dark`}>
            <Header />

            <div className="project-title">
                        <h2>Portfolio Site</h2>
                        <p>A page to show my learning and projects</p>
                        <p>React and Firebase</p>
                        <Link className = "project-address"to="https://new-homepage-235u.onrender.com/" >It's the site you're on</Link>
                        <p></p><Link className = "project-address" to = "https://github.com/neilchadders/new-homepage" >View Code</Link>
                        </div>

            <div className="container">
                <div className='project'>
                    <p className='project-text'>
                        For my personal site I opted to use React with React Router and Firebase to capture emails. Then to make it more accessible I added a dark mode using the useContect hook.
                    </p>
                </div>
                <div className="project photo-div">
                <img className="photo-project" src="/img/homepage.png" alt="homepage" />
                </div>
            </div>

            <div className="container">
                <div className="project photo-div">
                <img className="photo-project" src="/img/context.png" alt="homepage" />
                </div>
                <div className='project'>
                    <p className='project-text'>
                    This piece of code creates a context named DarkModeContext that uses createContext(). It defines a DarkModeProvider component that 
                    uses useState to track whether dark mode is active (false by default = light mode). It also includes a function toggleDarkMode that 
                    flips the current state. This setup allows any component wrapped in the provider to read or update the dark mode state,
                    </p>
                </div>
            </div>

            <div className="container">
                <div className='project'>
                    <p className='project-text'>
                    This component uses Firebase to collect and store form submissions in a Firestore database. When a user fills out the contact form and clicks 
                    the send button, the onSubmitForm function is triggered. This function prevents the default form behavior and uses the addDoc method from Firebase 
                    to add a new document containing the email, subject, and message fields to the "contactForm" collection in the Firestore database. 
                    If the submission is successful, it displays a toast notification and clears the form inputs; if it fails, 
                    it shows an error message. Firebase is initialized via an imported db configuration, which connects this form to the appropriate Firestore instance.
                    </p>
                </div>
                <div className="project photo-div">
                <img className="photo-project" src="/img/contactForm.png" alt="homepage" />
                </div>
            </div>
            <Footer />
        </div>
        
    )
}

export default ProjectThree
