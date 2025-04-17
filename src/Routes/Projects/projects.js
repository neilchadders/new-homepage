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
      /*
        {
            pic: "https://i.pinimg.com/564x/bf/91/0a/bf910a7ab627ac2c256f3c03f062e874.jpg",
            name: "Arwen",
            tech: "React, CSS, Express, PHP, MySQL", 
            description: " Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.",
            link: "https://lotr.fandom.com/wiki/Arwen",
            id: '123abcwex3096'
        },
        {
            pic: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f10204b-3fe8-4ae6-b5d0-960fdf0a2d82/d4i07t4-1bdf1d14-d031-473d-a5d9-659dd21f5201.jpg/v1/fill/w_900,h_1200,q_75,strp/samwise_gamgee_by_monkeyxmy_d4i07t4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMCIsInBhdGgiOiJcL2ZcLzFmMTAyMDRiLTNmZTgtNGFlNi1iNWQwLTk2MGZkZjBhMmQ4MlwvZDRpMDd0NC0xYmRmMWQxNC1kMDMxLTQ3M2QtYTVkOS02NTlkZDIxZjUyMDEuanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.2jaRG9uLVWzbCktZrXdbbG_e9zHAkng1Omi35HOVxfg",
            name: "Samwise Gamgee",
            tech: "React, CSS, Express, PHP, MySQL", 
            description: " Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.",
            link: "https://lotr.fandom.com/wiki/Samwise_Gamgee?so=search",
            id: '123abcw2222226'
        },
        {
            pic: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/11c2c554-a913-42d0-9de4-f085a516ebc4/d6rs2eh-500f570c-eba8-4de4-9045-2e71b0ca1ad1.jpg/v1/fill/w_1024,h_1140,q_75,strp/meriadoc_brandybuck_by_loonalucy_d6rs2eh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE0MCIsInBhdGgiOiJcL2ZcLzExYzJjNTU0LWE5MTMtNDJkMC05ZGU0LWYwODVhNTE2ZWJjNFwvZDZyczJlaC01MDBmNTcwYy1lYmE4LTRkZTQtOTA0NS0yZTcxYjBjYTFhZDEuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.WQmyhyKlYNKV2J_SJhqotBgOgYcmSRIDxlTz8IdQ-Ag",
            name: "Meriadoc Brandybuck",
            tech: "React, CSS, Express, PHP, MySQL", 
            description: " Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.",
            link: "https://lotr.fandom.com/wiki/Meriadoc_Brandybuck?so=search",
            id: '123abcweqqwv096'
        },
        {
            pic: "https://i.pinimg.com/originals/22/10/1b/22101bfc172ffe55b7b403d5648b3ef9.png",
            name: "Boromir",
            tech: "React, CSS, Express, PHP, MySQL", 
            description: " Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.",
            link: "https://lotr.fandom.com/wiki/Boromir?so=search",
            id: '123abcwe9898hhqqwv096'
        }
    ] */

export default projectArr;