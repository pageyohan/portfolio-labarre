import React, { useEffect, useState } from 'react';
import ProjectItem from '../components/ProjectItem';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/data/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error loading projects:', error));
  }, []);

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
