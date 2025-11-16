import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './projectCard.css';

export default function ProjectCard({ project }) 
{    
    return (
        <article className="project-card">
            {project.featured && (
                <span className="featured-badge">Featured</span>
            )}
            
            <div className="card-image">
                <img 
                    src={project.image} 
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                />
                <div className="card-overlay">
                    <div className="card-links">
                        {project.github && (
                            <a 
                                href={project.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} source code on GitHub`}
                                title="View Source"
                            >
                                <FaGithub />
                            </a>
                        )}
                        {project.demo && (
                            <a 
                                href={project.demo} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} live demo`}
                                title="Live Demo"
                            >
                                <FaExternalLinkAlt />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <ul className="tech-stack">
                    {project.technologies.map((tech, index) => (
                        <li key={index} className="tech-tag">
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
            
        </article>
    );
}