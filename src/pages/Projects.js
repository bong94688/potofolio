import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css'; // Ensure this file exists and is styled

const projects = [
  {
    title: 'Eye(I)Shopping',
    description: 'Machine learning and ChatGPT-based shopping assistant for visually impaired.',
    techStack: ['React', 'Spring Boot', 'NCP'],
    link: 'https://github.com/eye-I-shopping',
    image: '/path-to-eyeIshopping-image.jpg',
  },
  {
    title: '맛자취',
    description: 'Real-time location-based street vendor platform.',
    techStack: ['React', 'Spring Boot', 'Naver Cloud'],
    link: 'https://github.com/bitcampprettytiger/backend',
    image: '/path-to-matzachu-image.jpg',
  },
  {
    title: 'Capstone Project',
    description: 'Site for displaying and managing projects.',
    techStack: ['Spring Boot', 'QueryDSL', 'jQuery'],
    link: 'https://github.com/Jang990/Capstone',
    image: '/path-to-capstone-image.jpg',
  },
];

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
