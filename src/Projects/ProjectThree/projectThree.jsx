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
                        </div>

            <div className="container">
                <div className='project'>
                    <p className='project-text'>
                        TETS Lorem ipsum dolor sit amet consectetur adipisicing elit...
                    </p>
                </div>
                <div className="project photo-div">
                <img className="photo-project" src="/img/homepage.png" alt="homepage" />
                </div>
            </div>

            <div className="container">
                <div className="project photo-div">
                <img className="photo-project" src="/img/homepage.png" alt="homepage" />
                </div>
                <div className='project'>
                    <p className='project-text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit...
                    </p>
                </div>
            </div>

            <div className="container">
                <div className='project'>
                    <p className='project-text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit...
                    </p>
                </div>
                <div className="project photo-div">
                <img className="photo-project" src="/img/homepage.png" alt="homepage" />
                </div>
            </div>
            <Footer />
        </div>
        
    )
}

export default ProjectThree
