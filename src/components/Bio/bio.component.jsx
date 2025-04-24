import './bio.styles.css'

import myPic from "./meonmoors.jpeg"
import myHike from "./hike.jpeg"
import myReunion from "./reunion.jpeg"


import { DarkModeContext } from '../../context/DarkModeContext'
import { useContext } from 'react'

const Bio = () => {
    const { darkMode } = useContext(DarkModeContext);
    const containerClass = darkMode ? 'Container-light' : 'Container-dark';

    return (
        <div id="bio-container" className={containerClass}>
            <div className="container row">
                <div className="bio bio-text">
                    <p><span>Before getting into</span> software development, I studied law and spent a few years teaching and traveling abroad. Those experiences helped me build strong communication and problem-solving skills, and made me comfortable adapting to new environments—something that’s really come in handy while learning to code. Over time, I realized I wanted to do something more creative and technical, which led me to start a part-time MSc in Computer Science and Software Development.</p>
                </div>
                <div className="bio photo-div">
                    <img className="photo-bio" src={myHike} alt="Hiking" />
                </div>
            </div>

            <div className="container row reverse">
                <div className="bio bio-text">
                    <p><span>What really drew</span> me to software development is how hands-on and ever-evolving it is. I love being able to build things that actually work and solve real problems. There's something super satisfying about figuring out a bug or finally getting a feature to work just right. I enjoy the mix of logic, creativity, and constant learning, and I’m excited to keep growing and eventually work on projects that make a real difference for people.</p>
                </div>
                <div className="bio photo-div">
                    <img className="photo-bio" src={myPic} alt="On the moors" />
                </div>
            </div>

            <div className="container row">
                <div className="bio bio-text">
                    <p><span>Right now, I’ve</span> been working mostly with JavaScript, React, and Next.js on the frontend, and using PostgreSQL for the database side. I’ve also been learning the MERN stack to get more full-stack experience, and recently started diving into .NET for backend development. It's been a lot of fun putting everything together and seeing how all the pieces connect. I'm really looking forward to joining a team where I can keep learning, contribute to cool projects, and grow as a developer.</p>
                </div>
                <div className="bio photo-div">
                    <img className="photo-bio" src={myReunion} alt="Reunion" />
                </div>
            </div>
        </div>
    )
}

export default Bio;
