import Header from '../../components/Header/header.component'
import Footer from '../../components/Footer/footer';
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
            <p>React, Redux Toolkit, CSS, Express, MongoDB, Node.js, Boostrap, nodemailer</p>
            <Link to="https://chorley-chilli.onrender.com" className='project-address'>Visit Chorley Chill</Link>
            <p></p><Link to="https://github.com/neilchadders/chorley-chilli" className='project-address'>Github</Link>
            
            </div>

            <div className="container">
                <div className='project'>
                    <div className='project-text'>
                    <p>I really wanted to put all my learning into something practical and thought an ecommerce MERN stack would do the trick. It involved setting up a server, modeling data, creating a MongoDB database, seeding data, creating the UI, managing state with Redux and authentication with JWT.</p>
                   Features include:
                   <ul>
                        <li>Shopping cart with quantity</li>
                        <li>Product reviews and ratings</li>
                        <li>Products carousel</li>
                        <li>Product pagination</li>
                        <li>Product search feature</li>
                        <li>User profile with orders</li>
                        <li>Admin product, user and order management</li>
                        <li>Checkout process (shipping, payment method, etc)</li>
                        <li>PayPal / credit card integration</li>
                        <li>MongoDb database</li>
                    </ul>

                    <p> Please login using the username Test@email.com and the password 123456. Alternatively please register with your own or dummy details.</p>
                    </div>
                </div>
                <div className="project photo-div">
                    <img className="photo-project" src="/img/chilli-login.png" alt="Logo" />
                </div>
            </div>

            <div className="container">
                <div className="project photo-div">
                    <img className="photo-project" src="/img/product-controller.png" alt="Logo" />
                </div>
                <div className='project'>
                    <p className='project-text'>
                        I had played around with other databases like Postgres, SQL and Firebase before this but not MongoDB. I found setting up the Models and schema pretty straightforward and self-explanatory. MongoDB compass was also OK to get to grips with. </p>
                        <p>The really tricky part here were the controllers. It took a while to get to grips with the code as one of the tutorials I was using created custom middleware and an asyncHandler function. I had to rewrite a lot of the code to get it to work with my own models and schema. </p>                       
                </div>
            </div>

            <div className="container">
                <div className='project'>
                    <p className='project-text'>
                        I was a bit overwhelmed with Redux Toolkit at first but once I undertood the concept of reducers and slices it made a lot more sense.  
                    </p>
                </div>
                <div className="project photo-div">
                    <img className="photo-project" src="/img/cart-slice.png" alt="Logo" />
                </div>
            </div>
            <Footer />
        </div>
       
    )
}

export default ProjectOne
