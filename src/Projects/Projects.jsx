import { useState } from 'react';
import ProjectCard from './Card/ProjectCard';
import projectsData from './projectsData.json';
import './projects.css';

export default function Projects() 
{
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all'
        ? projectsData
        : projectsData.filter(p => p.featured);

    return (

        <section id="projects">
            <div className="projects-container">
                <div className="projects-header">
                    <div className="title-divider">
                        <h2>Projects</h2>
                    </div>
                    
                    <div className="filter-tabs">
                        <button 
                            className={filter === 'all' ? 'active' : ''}
                            onClick={() => setFilter('all')}
                        >
                            All Projects ({projectsData.length})
                        </button>
                        <button 
                            className={filter === 'featured' ? 'active' : ''}
                            onClick={() => setFilter('featured')}
                        >
                            Featured ({projectsData.filter(p => p.featured).length})
                        </button>
                    </div>
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}