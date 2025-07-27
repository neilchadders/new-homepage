import {collection, addDoc} from "firebase/firestore";
import { db} from "../../config/firebase";

import { useState, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {DarkModeContext} from '../../context/DarkModeContext'

import './contactform.styles.css'


const ContactForm = () =>{
  


  const contactFormCollectionRef = collection(db, "contactForm") // Firebase collection reference 

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState(""); 
  const [loading, setLoading] = useState(false);

  const { darkMode } = useContext(DarkModeContext);


  const onSubmitForm = async (e) => {
    e.preventDefault(); 

     // Basic validation!!!
    if (!email || !subject || !message) {
      toast.error("All fields are required!");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Invalid email address!");
      return;
    }

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
  
 
  return(
    

    
    <div id="contact-form" className={darkMode ? `Container-light`: `Container-dark`} >
    <section>

        
          <h1>Send Email</h1>
          <form>
          <div className="form-wrapper">
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
              ></input>
            </div>
            <div>
              <label htmlFor="subject">Email Subject</label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                id="subject"
              ></input>
            </div>
            <div>
              <label htmlFor="message">Message Body</label>
              <textarea
                value={message}
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
      <ToastContainer position="top-right" autoClose={3000} />
    
    </div>

    
      
  );
}

export default ContactForm;