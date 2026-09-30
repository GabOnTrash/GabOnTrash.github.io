import projectsData from './projectsData.json';
import './projects.css';

export default function Projects() 
{
    return (
        <section id="projects" className="container hairline-bottom">
            <div className="grid-12 projects-header">
                <div className="about-wayfinding projects-wayfinding">
                    <span className="section-number">02</span>
                    <h2 className="section-title">SELECTED WORK</h2>
                </div>
            </div>

            <div className="projects-list">
                {projectsData.map((project) => (
                    <div key={project.id} className="project-row grid-12 hairline-top">
                        
                        <div className="project-meta">
                            <span className="meta-label">ID / {String(project.id).padStart(2, '0')}</span>
                            <div className="tech-stack">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="tech-item">[{tech}]</span>
                                ))}
                            </div>
                            <div className="project-links">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noreferrer" className="meta-link">↗ GitHub</a>
                                )}
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noreferrer" className="meta-link">↗ Live Demo</a>
                                )}
                            </div>
                        </div>

                        <div className="project-image-container">
                            <img src={project.image} alt={project.title} loading="lazy" className="project-image" />
                        </div>

                        <div className="project-info">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}