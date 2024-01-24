import Header from '../../components/Header/header.component.jsx'

import './contact.styles.css'

import { useState } from 'react';

const Contact = () =>{
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    return (
        <>
        <Header />
        <div className="App">
      <section>
        <form>
          <h1>Send Email</h1>
          <div className='form-wrapper'>
          <div>
            <label htmlFor='email'>Email Address</label>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" id="email"></input>
          </div>
          <div>
            <label htmlFor='subject'>Email Subject</label>
            <input onChange={(e)=>setSubject(e.target.value)} type="text" id="subject"></input>
          </div>
          <div>
            <label htmlFor='message'>Message Body</label>
            <textarea onChange={(e)=>setMessage(e.target.value)} type="text" id="message"></textarea>
          </div>
          <div>
            <button type='submit'>Send Email</button>
          </div>
          </div>
        </form>
      </section>
    </div>
        </>
    )
}

export default Contact