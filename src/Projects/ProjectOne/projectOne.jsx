import Header from '../../components/Header/header.component'
import './projectOne.css'

import { DarkModeContext } from '../../context/DarkModeContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const ProjectOne = () => {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div id="project-container" className={darkMode ? `Container-light` : `Container-dark`}>
            <Header />
            
            <div className="project-title">
            <h2>Chorley Chill</h2>
            <p>Mern Stack Ecommerce app</p>
            <p>React, CSS, Express, MongoDB, Node.js, Boostrap, nodemailer</p>
            <Link to="https://chorley-chilli.onrender.com" className='project-address'>Visit Chorley Chill</Link>
            </div>

            <div className="container">
                <div className='project'>
                    <p className='project-text'>
                        TETS Lorem ipsum dolor sit amet consectetur adipisicing elit...
                    </p>
                </div>
                <div className="project photo-div">
                    <img className="photo-project" src="/img/chorleychilli.png" alt="Logo" />
                </div>
            </div>

            <div className="container">
                <div className="project photo-div">
                    <img className="photo-project" src="/img/chorleychilli.png" alt="Logo" />
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
                    <img className="photo-project" src="/img/chorleychilli.png" alt="Logo" />
                </div>
            </div>
        </div>
    )
}

export default ProjectOne
