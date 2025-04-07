import {collection, addDoc} from "firebase/firestore";
import { db} from "../../config/firebase";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


import {DarkModeContext} from '../../context/DarkModeContext'
import { useContext } from 'react'


const ContactForm = () =>{
  


  const contactFormCollectionRef = collection(db, "contactForm") // 

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await addDoc(contactFormCollectionRef, {
        email: email,
        subject: subject,
        message: message,
      });
  
      toast.success("Message sent successfully!");
  
      // Clear the form
      setEmail("");
      setSubject("");
      setMessage("");
  
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Try again.");
    }
  };
  
  const {darkMode} = useContext(DarkModeContext);
  return(
    

    
    <div id="contact-form" className={darkMode ? `Container-light`: `Container-dark`} >
    <section>

        
          <h1>Send Email</h1>
          <form>
          <div className="form-wrapper">
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
              ></input>
            </div>
            <div>
              <label htmlFor="subject">Email Subject</label>
              <input
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                id="subject"
              ></input>
            </div>
            <div>
              <label htmlFor="message">Message Body</label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                id="message"
              ></textarea>
            </div>
            <div id = "send-button">
             <button id = "send-button-send" onClick={onSubmitForm}>Send..</button>
            </div>
          </div>
          </form>
      </section>
      <>
    <ToastContainer position="top-right" autoClose={3000} />
    <div id="contact-form" className={darkMode ? `Container-light`: `Container-dark`}>
    </div>
  </>

    </div>

    
      
  );
}

export default ContactForm;