import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Sample Project 1',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Sample Project 2',
    url: 'https://www.youtube.com/watch?v=oHg5SJYRHA0',
  },
  {
    title: 'Sample Project 3',
    url: 'https://www.youtube.com/watch?v=6_b7RDuLwcI',
  },
];

const getYoutubeThumbnail = (url) => {
  const match = url.match(/(?:v=|\.be\/)([^&]+)/);
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : '';
};

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={index} className="project-card">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img src={getYoutubeThumbnail(project.url)} alt={project.title} />
              <h3>{project.title}</h3>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;

