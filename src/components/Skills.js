import React from 'react';
import SkillCard from '../components/SkillCard';

const skills = [
  {
    name: 'React',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    description: 'A JavaScript library for building user interfaces.',
  },
  {
    name: 'Spring Boot',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg',
    description: 'Framework for building robust backend systems.',
  },
  {
    name: 'TensorFlow',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg',
    description: 'An open-source machine learning framework.',
  },
  {
    name: 'NCP',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Naver_Cloud_Platform_logo.svg',
    description: 'Cloud service platform by NAVER.',
  },
  {
    name: 'Docker',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',
    description: 'Containerization platform for building and sharing apps.',
  },
];

function Skills() {
  return (
    <div className="skills">
      <h1>My Skills</h1>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
