import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Eye(I)Shopping',
    description: 'Machine learning and ChatGPT-based shopping assistant for visually impaired.',
    techStack: ['React', 'Spring Boot', 'NCP'],
    link: 'https://github.com/eye-I-shopping',
  },
  {
    title: '맛자취',
    description: 'Real-time location-based street vendor platform.',
    techStack: ['React', 'Spring Boot', 'Naver Cloud'],
    link: 'https://github.com/bitcampprettytiger/backend',
  },
  {
    title: 'Capstone Project',
    description: 'Site for displaying and managing projects.',
    techStack: ['Spring Boot', 'QueryDSL', 'jQuery'],
    link: 'https://github.com/Jang990/Capstone',
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