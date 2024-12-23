import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css'; // Ensure this file exists and is styled

const projects = [
  {
    title: 'Eye(I)Shopping',
    description: '시각장애인를 위한 맞춤형 오프라인 쇼핑 도우미 프로젝트입니다. ',
    techStack: ['React', 'Spring Boot', 'NCP'],
    link: 'https://github.com/eye-I-shopping',
    image: '/path-to-eyeIshopping-image.jpg',
  },
  {
    title: 'Couple App',
    description: '커플들을 위한 편리한 데이트 도우미 프로젝트입니다.',
    techStack: ['Spring Boot', 'graphql', 'Jpa','AWS'],
    link: 'https://github.com/bit-o-gi',
    image: '/커플.jpg',
  },
  {
    title: '맛자취',
    description: '전국 노점상 소상 공인을  온/오프라인 판매 프로젝트 입니다.',
    techStack: ['React', 'Spring Boot', 'Socket'],
    link: 'https://github.com/bitcampprettytiger/backend',
    image: '/path-to-matzachu-image.jpg',
  },
 
  {
    title: 'Capstone Project',
    description: '학교 캡스톤 디자인를 함께 하고싶은 사람들을 모집하는 프로젝트입니다.',
    techStack: ['Spring Boot', 'QueryDSL', 'jQuery'],
    link: 'https://github.com/Jang990/Capstone',
    image: '/path-to-capstone-image.jpg',
  },
  {
    title: 'Potofolio',
    description: 'Simbonggyo portfolio',
    techStack: ['React', 'Redux', 'tailwind','AWS'],
    link: 'https://github.com/bong94688/potofolio',
    image: '/potofolio.JPG',
  },
  {
    title: 'GreenDefense',
    description: '게임으로 플러깅을 할수있는 환경을 지킴이 프로젝트 입니다.',
    techStack: ['Spring Boot', 'JPA','AWS'],
    link: 'https://github.com/Jang990/Capstone',
    image: '/150141115.png',
  },
];

function Projects() {
  return (
    <div className="projects">
      <h1>PROJECT</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
