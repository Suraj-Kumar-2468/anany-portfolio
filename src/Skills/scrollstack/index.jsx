import React, { useEffect, useRef } from 'react';
import './SkillStack.css';

const SkillStack = ({ skills }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const items = containerRef.current.querySelectorAll('.skill-card');
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="skill-stack"  ref={containerRef}>
      {skills.map((skill, index) => (
        
        <div className="skill-card" style={{  top : `${150+(30*(index+1))}px`}} key={index}>
          <div className="skill-card-header">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-score">{skill.score}%</span>
          </div>
          <div className="skill-description">{skill.description}</div>
        </div>
      ))}
    </div>
  );
};

export default SkillStack;
