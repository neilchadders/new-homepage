import Header from '../../components/Header/header.component'
import Footer from '../../components/Footer/footer'
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
                                    
                                    <p></p><Link to = "https://github.com/neilchadders/exercise-countdown-app" className='project-address'>View Code</Link>
                                    </div>
            

                                    <div className="container">
                <div className='project'>
                    <div className='project-text'>
                        <p>This workout timer app enables users to create a customizable circuit by selecting exercises from a predefined list. Users can add or remove exercises individually, select all, or clear their selection entirely. Once exercises are selected, the app reveals options to set a workout duration either by entering a custom time or choosing preset values of 3, 5, or 10 minutes. After setting the time, the app initiates a 3-second countdown ("3, 2, 1, Go!") to prepare the user before the workout begins. During the session, the app displays a new, randomly selected exercise from the user's list every 10 seconds, ensuring variety while preventing immediate repetition of the same activity. The countdown timer updates in real-time, and when time expires, a "Finished!" message is shown.</p>
                    </div>
                </div>
                <div className="project photo-div">
                    <img className="photo-project" src="/img/dom.png" alt="Logo" />
                </div>
            </div>

            <div className="container">
                <div className="project photo-div">
                    <img className="photo-project" src="/img/product-controller.png" alt="Logo" />
                </div>
                <div className='project'>
                    <p className='project-text'>
                    The app features pause and reset functionality for flexibility during workouts. The pause button toggles the countdown on and off, while the reset button reloads the page to clear all selections and restart the session. Exercises are displayed dynamically using <code>innerHTML</code>, and the app uses <code>addEventListener</code> extensively to handle button interactions for exercise selection, time input, and controls.</p>
                    </div>
                </div>

            <div className="container">
                <div className='project'>
                    <p className='project-text'>
                    Async and Promises are used strategically to coordinate timed events. Specifically, the app uses an <code>async</code> function with <code>await</code> and a <code>Promise</code> to introduce a 3-second delay after the "Start" button is clicked. This allows the initial countdown to play out fully before the main exercise countdown and rotation begin. This use of asynchronous programming ensures smooth sequencing of time-sensitive actions, maintaining a responsive and user-friendly flow throughout the workout experience.</p>
                </div>
                <div className="project photo-div">
                    <img className="photo-project" src="/img/promise.png" alt="Logo" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProjectTwo
