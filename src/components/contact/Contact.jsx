import React from 'react'
import './contact.css'
import {AiOutlineMail} from "react-icons/ai";
import {BsWhatsapp} from "react-icons/bs";
import { useRef } from 'react';
import  emailjs from 'emailjs-com';






export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ss9zm04', 'template_d63sogd', form.current, '0b5P_luXlmuHn0qzl')

    e.target.reset()

      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    
    <section id='contact'>
      <div className="contact-title">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      </div>

      <div className="container contact-container">
      <div className="contact-options">
    <article className='contact-apps'>
    <AiOutlineMail className='contact-icons'></AiOutlineMail>
    <h4>Email</h4>
    <h5>tabish132004@gmail.com</h5>
    <a href="mailto:tabish132004@gmail.com" target={"_blank"}>Send A Message</a>
    </article>

    <article className='contact-apps'>
    <BsWhatsapp className='contact-icons'></BsWhatsapp>
    <h4>WhatsApp</h4>
    <h5>+44 7491442109</h5>
    <a href="https://api.whatsapp.com/send?phone=07491442109" target={"_blank"}>Send A Message</a>
    </article>
      </div>
      <form ref={form} onSubmit={sendEmail } >
        <input type="text" name='name' placeholder='Enter Your Name' required />
        <input type="email" name='email' placeholder='Enter Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button className='btn btn-primary btn-form' type="submit">Send Message</button>
      </form>
      </div>

    </section>
  )
}

export default ContactUs
