import React from 'react';
import '../styles/ProjectCard.css'; // Ensure you create and style this file

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={`${project.title} preview`} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <div className="tech-stack">
        {project.techStack.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;