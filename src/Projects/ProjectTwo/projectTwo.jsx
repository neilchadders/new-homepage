import Header from '../../components/Header/header.component'
import './projectTwo.css'

import { DarkModeContext } from '../../context/DarkModeContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const ProjectTwo = () => {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div id="project-container" className={darkMode ? `Container-light` : `Container-dark`}>
            <Header />

             <div className="project-title">
                                    <h2>Exercise Countdown App</h2>
                                    <p>Exercise Countdown App</p>
                                    <p>Vanilla JavaScript, Html and CSS</p>
                                    <Link to="https://hardcore-ritchie-17f9e3.netlify.app/" className='project-address'>Visit Exercise Countdown</Link>
                                    </div>
            

            <div className="container">
                <div className='project'>
                    <p className='project-text'>
                        TETS Lorem ipsum dolor sit amet consectetur adipisicing elit...
                    </p>
                </div>
                <div className="project photo-div">
                    <img className="photo-project" src="/img/exercise.png" alt="exercise" />
                </div>
            </div>

            <div className="container">
                <div className="project photo-div">
                    <img className="photo-project" src="/img/exercise.png" alt="exercise" />
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
                    <img className="photo-project" src="/img/exercise.png" alt="exercise" />
                </div>
            </div>
        </div>
    )
}

export default ProjectTwo
