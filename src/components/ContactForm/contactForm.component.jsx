import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { DarkModeContext } from '../../context/DarkModeContext';
import './contactform.styles.css';

const ContactForm = () => {
  const contactFormCollectionRef = collection(db, "contactForm"); const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { darkMode } = useContext(DarkModeContext);

  const onSubmitForm = async (e) => {
    e.preventDefault();

    // Basic validation!!
    if (!email || !subject || !message) {
      toast.error("All fields are required!");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Invalid email address!");
      return;
    }

    setLoading(true);
    try {
      await addDoc(contactFormCollectionRef, {
        email,
        subject,
        message,
        createdAt: new Date(),
      });

      toast.success("Message sent successfully!");
      setEmail(""); setSubject(""); setMessage("");
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact-form" className={darkMode ? "Container-light" : "Container-dark"}>
      <section>
        <h1>Send Email</h1>
        <form onSubmit={onSubmitForm}>
          <div className="form-wrapper">
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                required
              />
            </div>
            <div>
              <label htmlFor="subject">Email Subject</label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                id="subject"
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message Body</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                required
              />
            </div>
            <div id="send-button">
              <button id="send-button-send" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </div>
        </form>
      </section>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ContactForm;
