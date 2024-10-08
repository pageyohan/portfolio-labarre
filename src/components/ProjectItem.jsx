import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectItem.css';

const plusImage = `${process.env.PUBLIC_URL}/images/+.svg`;
const moinsImage = `${process.env.PUBLIC_URL}/images/-.svg`;

const ProjectItem = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.maxHeight = '0px';
    }
  }, [isOpen]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleReadMore = () => {
    navigate(`/project/${project.title.replace(/\s+/g, '-').toLowerCase()}`);
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
          className="project-icon" 
        />
      </div>
      <div 
        className={`project-content ${isOpen ? 'open' : ''}`}
        ref={contentRef}
      >
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
        <div className="project-details">
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-description">
            <p>{project.description}</p>
            <button onClick={handleReadMore} className="read-more-button">En savoir plus...</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
