// src/pages/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  const point = `${process.env.PUBLIC_URL}/images/!.svg`;
  const mail = `${process.env.PUBLIC_URL}/images/mail.svg`;
  const telephone = `${process.env.PUBLIC_URL}/images/téléphone.svg`;
  const instagram = `${process.env.PUBLIC_URL}/images/instagram.svg`;

  return (
    <div className="contact-container">
      <div className="contact-header">
        <img src={point} alt="Exclamation Mark" className="contact-icon" />
        <div className="contact-title">
          <div>POUR ME</div>
          <div>CONTACTER</div>
        </div>
      </div>
      <div className="contact-item">
        <img src={mail} alt="Mail Icon" className="contact-icon" />
        <a href="mailto:labarbouil.design@gmail.com">LABARBOUIL.DESIGN@GMAIL.COM</a>
      </div>
      <div className="contact-item">
        <img src={telephone} alt="Telephone Icon" className="contact-icon" />
        <a href="https://api.whatsapp.com/send/?phone=33642951641&text&type=phone_number&app_absent=0" target='_blank'>+33 6 42 95 16 41</a>
      </div>
      <div className="contact-item">
        <img src={instagram} alt="Instagram Icon" className="contact-icon" />
        <a href="https://www.instagram.com/labarbouil_design/" target='_blank'>@LABARBOUIL_DESIGN </a>
      </div>
    </div>
  );
};

export default Contact;