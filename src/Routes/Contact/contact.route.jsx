import Header from '../../components/Header/header.component.jsx'
import './contact.styles.css'

import {collection, addDoc} from "firebase/firestore";
import { db} from "../../config/firebase";

import { useState } from "react";
//import { toast, ToastContainer } from "react-toastify";
//import 'react-toastify/dist/ReactToastify.css';
//import axios from "axios";



function Contact() {


  const contactFormCollectionRef = collection(db, "contactForm") // 

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  //const [loading, setLoading] = useState("");

  const onSubmitForm = async () => {
    try {
      await addDoc(contactFormCollectionRef, {
        email: email,
        subject: subject,
        message: message,
      });
     
    } catch (err) {
      console.error(err);
    }
  };


  return(
    <>
   
    <Header />
    <div className="contact-form">
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
            <div>
             <button onClick={onSubmitForm}>Send..</button>
            </div>
          </div>
          </form>
      </section>
    </div>
    </>
  );
}
  
 {/*

  const submitHandler = async (e) => {
 
    e.preventDefault();
    if (!email || !subject || !message)
      return toast.error(
        "Please make sure to fill the email address, email subject, and message"
      );

    try {
      setLoading(true);
      const { data } = await axios.post(`/api/email`, {
        email,
        subject,
        message,
      });
      setLoading(false);
      toast.success(data.message);
    } catch (error) {
      setLoading(false);
      toast.error(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  {/*

  return (
    
*/}

export default Contact