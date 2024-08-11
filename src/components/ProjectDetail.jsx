import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { title } = useParams();
  const [project, setProject] = useState(null);
  const [activeOption, setActiveOption] = useState('couleurs');

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
      <div className="project-header">
        <h2>{project.title}</h2>
      </div>
      <div className="project-main-content">
        <img src={project.image} alt={project.title} className="project-main-image" />
        <div className="project-description">
          <p>{project.box1}</p>
          <p>{project.box2}</p>
        </div>
      </div>
      <div className="project-box3">
        <p>{project.box3}</p>
      </div>
      <div className="project-images">
        <img src={project.imagegauche} alt="Placeholder 1" className="project-sub-image"/>
        <img src={project.imagedroite} alt="Placeholder 2" className="project-sub-image" />
      </div>
      <div className="project-divider-custom"></div>

      <div className="project-options">
        <button 
          className={`option-button ${activeOption === 'couleurs' ? 'active' : ''}`} 
          onClick={() => setActiveOption('couleurs')}
        >
          Couleur
        </button>
        <button 
          className={`option-button ${activeOption === 'typographie' ? 'active' : ''}`} 
          onClick={() => setActiveOption('typographie')}
        >
          Typographie
        </button>
      </div>

      <div className="option-content">
        {activeOption === 'couleurs' && (
          <div className="couleurs-content">
            {project.colors && project.colors.map((color, index) => {
              const { R, V, B, C, M, J, N, nomCouleur } = color;
              const backgroundColor = `rgb(${R}, ${V}, ${B})`;
              const textColor = (R * 0.299 + V * 0.587 + B * 0.114) > 186 ? 'black' : 'white';

              return (
                <div key={index} className="color-box-container">
                  <div 
                    className="color-box" 
                    style={{ backgroundColor, color: textColor }}
                  >
                    <div className="color-row">
                      <div className="color-label nom-couleur">{nomCouleur}</div>
                      <div className="color-column">
                        <span className="color-label">R: {R}</span>
                        <span className="color-label">V: {V}</span>
                        <span className="color-label">B: {B}</span>
                      </div>
                      <div className="color-column">
                        <span className="color-label">C: {C}</span>
                        <span className="color-label">M: {M}</span>
                        <span className="color-label">J: {J}</span>
                        <span className="color-label">N: {N}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* Afficher les descriptions des couleurs sous les color-box */}
            <div className="color-description">
              <p>{project.couleurDescription}</p>
              <p>{project.couleurDescription2}</p>
            </div>
          </div>
        )}
        {activeOption === 'typographie' && (
          <div className="typographie-content">
            {/* Contenu pour la typographie */}
          </div>
        )}
      </div>
      {project.projectImage && (
        <div className="project-large-image">
          <img src={project.projectImage} alt="Grande Image" />
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;