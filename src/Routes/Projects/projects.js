import chorleychilli from './chorleychilli.png';
import exerciseCountdown from './exercise.png';
import homepage from './homepage.png';

const projectArr =
    [
        {
            pic: chorleychilli,
            name: "MERN Stack Ecommerce app",
            tech: "React, CSS, Express, MongoDB, Node.js, Boostrap, nodemailer",
            description: " This is a MERN stack ecommerce application that allows users to browse and purchase chiili sauces. It features login and registeroptions, secure payment through PayPal, and an admin dashboard for managing products and orders. Registering and payments are confirmed by email sent through nodemailer.",
            link: "/projectOne",
            id: '123abc'
        },

        {
            pic: exerciseCountdown,
            name: "Exercise Countdown",
            tech: "Vanilla JS, CSS, HTML", 
            description: "I really wanted to focus on the fundamentals so opted for a vanilla JS project that incorportated async programming and promises. This is a countdown timer that allows you to add or remove exercises, set a time and then start the countdown. It also has a pause and reset function.",
            link: "/projectTwo",
            id: "321ABC"
        },

        

        {
            pic: homepage,
            name: "My Portfolio site",
            tech: "React, CSS, FireBase, HTML", 
            description: "This is my portfolio site that I built using React and Firebase. It features a home page, projects page, about me page and a contact form. The contact form uses Firebase to send emails to me when someone fills it out. It also incorporates a Darkmode toggle using the useContext hook.",
            link: "/projectThree",
            id: '1abcsrqrvv98'
        }, ]

        /* PRODUCTION CODE - URL TO EXTERNAL SITES
        const projectArr =
    [
        {
            pic: chorleychilli,
            name: "MERN Stack Ecommerce app",
            tech: "React, CSS, Express, MongoDB, Node.js, Boostrap, nodemailer",
            description: " This is a MERN stack ecommerce application that allows users to browse and purchase chiili sauces. It features login and registeroptions, secure payment through PayPal, and an admin dashboard for managing products and orders. Registering and payments are confirmed by email sent through nodemailer.",
            link: "https://new-homepage-235u.onrender.com/projectOne",
            id: '123abc'
        },

        {
            pic: exerciseCountdown,
            name: "Exercise Countdown",
            tech: "Vanilla JS, CSS, HTML", 
            description: "I really wanted to focus on the fundamentals so opted for a vanilla JS project that incorportated async programming and promises. This is a countdown timer that allows you to add or remove exercises, set a time and then start the countdown. It also has a pause and reset function.",
            link: "https://new-homepage-235u.onrender.com/projectTwo",
            id: "321ABC"
        },

        

        {
            pic: homepage,
            name: "My Portfolio site",
            tech: "React, CSS, FireBase, HTML", 
            description: "This is my portfolio site that I built using React and Firebase. It features a home page, projects page, about me page and a contact form. The contact form uses Firebase to send emails to me when someone fills it out. It also incorporates a Darkmode toggle using the useContext hook.",
            link: "https://new-homepage-235u.onrender.com/projectThree",
            id: '1abcsrqrvv98'
        }, ]

        */

export default projectArr;