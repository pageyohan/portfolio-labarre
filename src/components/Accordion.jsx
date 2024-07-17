import React, { useState, useRef, useEffect } from 'react';
import './Accordion.css';
const plusImage = `${process.env.PUBLIC_URL}/images/+.svg`;
const moinsImage = `${process.env.PUBLIC_URL}/images/-.svg`;

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
        contentRef.current.style.opacity = '1';
      } else {
        contentRef.current.style.height = '0';
        contentRef.current.style.opacity = '0';
      }
    }
  }, [isOpen]);

  return (
    <div className="accordion">
      <div className="accordion-divider"></div>
      <div className="accordion-header">
        <h2>{title}</h2>
        <img 
          src={isOpen ? moinsImage : plusImage} 
          alt={isOpen ? "Moins" : "Plus"} 
          className={`accordion-icon ${isOpen ? 'open' : ''}`} 
          onClick={toggleAccordion} // Apply the click event only to the image
        />
      </div>
      <div ref={contentRef} className={`accordion-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
