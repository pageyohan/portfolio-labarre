import React from 'react';
import './Footer.css';

const Footer = () => {
  const mail = `${process.env.PUBLIC_URL}/images/mail.svg`;
  const telephone = `${process.env.PUBLIC_URL}/images/téléphone.svg`;
  const instagram = `${process.env.PUBLIC_URL}/images/instagram.svg`;

  return (
<div className="footer-container">
  <div className="footer-item">
    <img src={instagram} alt="Instagram Icon" className="footer-icon" />
    <a href="https://www.instagram.com/labarbouil_design/" target="_blank" rel="noopener noreferrer">@LABARBOUIL_DESIGN</a>
  </div>
  <div className="footer-item">
    <img src={mail} alt="Mail Icon" className="footer-icon" />
    <a href="mailto:labarbouil.design@gmail.com">LABARBOUIL.DESIGN@GMAIL.COM</a>
  </div>
  <div className="footer-item">
    <img src={telephone} alt="Telephone Icon" className="footer-icon" />
    <a href="https://api.whatsapp.com/send/?phone=33642951641&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">+33 6 42 95 16 41</a>
  </div>
</div>

  );
};

export default Footer;
