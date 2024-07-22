import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { title } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const response = await fetch(`${process.env.PUBLIC_URL}/data/projects.json`);
      const projects = await response.json();
      const project = projects.find(proj => proj.title.replace(/\s+/g, '-').toLowerCase() === title);
      setProject(project);
    };

    fetchProject();
  }, [title]);

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} className="project-detail-image" />
      <div className="project-detail-box">
        <p>{project.box1}</p>
        <p>{project.box2}</p>
      </div>
      <div className="project-box3">
        <p>{project.box3}</p>
      </div>
    </div>
  );
};

export default ProjectDetail;
