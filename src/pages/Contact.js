import React from 'react'
import '../styles/Contact.css'
import PizzasImg from '../assets/pizzas.jpg'

function Contact() {
  return (
    <div className='contact'>
      <div
        className='contact-img'
        style={{ backgroundImage: `url(${PizzasImg})` }}
      ></div>
      <div className='contact-us'>
        <h1>Contact Us</h1>
        <form id='contact-form' method='POST'>
          <label htmlFor='name'>Full Name</label>
          <input type='text' name='name' placeholder='Enter full name...' />
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' placeholder='Enter email...' />
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            placeholder='Enter message...'
            required
            rows='6'
          ></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
