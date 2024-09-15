import React from 'react';
import './ContactContent.css';

function ContactContent() {
  return (
    <div className="contact-container">
      <h1 className="headline">Contact</h1>
      <form id="contact-form">
        <div className="input-group">
          <input type="text" id="name" name="name" placeholder="Name" required />
          <input type="email" id="email" name="email" placeholder="E-Mail" required />
        </div>
        <textarea id="message" name="message" placeholder="Message" required></textarea>
        <button className="button" type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactContent;