import React, { useState } from 'react';
import './ProjectItem.css';

const plusImage = `${process.env.PUBLIC_URL}/images/+.svg`;
const moinsImage = `${process.env.PUBLIC_URL}/images/-.svg`;

const ProjectItem = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="project-item">
      <div className="project-divider"></div>
      <div className="project-header" onClick={toggleAccordion}>
        <div className="project-title">
          <h2>{project.title}</h2>
          <span className="project-category">{project.category}</span>
        </div>
        <img 
          src={isOpen ? moinsImage : plusImage} 
          alt={isOpen ? "Moins" : "Plus"} 
          className={`project-icon ${isOpen ? 'open' : ''}`} 
        />
      </div>
      {isOpen && (
        <div className="project-content">
          <p>{project.description}</p>
          <img src={project.image} alt={project.title} className="project-image" />
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
