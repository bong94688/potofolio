import React from 'react';

function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
      <h3>{skill.name}</h3>
      <p>{skill.description}</p>
    </div>
  );
}

export default SkillCard;
