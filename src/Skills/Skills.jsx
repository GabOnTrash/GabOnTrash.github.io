import React, { useState, useRef, useEffect } from "react";

import languagesData from "./languages.json";
import Card from "./Card/Card.jsx";
import icons from "./icons.jsx"

import "./skills.css";

export default function Skills() 
{
    const [showLanguages, setShowLanguages] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const toggleLanguages = () => 
    {
        setShowLanguages(!showLanguages);
        setSelectedLanguage(null);
    };

    const toggleProjects = (lang) => 
    {
        setSelectedLanguage(lang);
    };

    const cardsRef = useRef(null);
    const observer = useRef(null);

    useEffect(() => 
    {
        if (!cardsRef.current) return;

        observer.current = new IntersectionObserver(([entry]) => 
        {
            if (!entry.isIntersecting) 
            {
                setShowLanguages(false);
                setSelectedLanguage(null);
            }
        }, { threshold: 0.1 });

        observer.current.observe(cardsRef.current);

        return () => 
        {
            if (observer.current && cardsRef.current) 
            {
                observer.current.unobserve(cardsRef.current);
            }
        };
    }, [showLanguages]); 

    return (
        <section id="skills" className="project-section">
        <div className="projects-label">
            <h4 onClick={toggleLanguages}>DEV SKILLS</h4>
        </div>

        {showLanguages && (
            <div className="cards" ref={cardsRef}>
                {languagesData.map((lang) => (
                    <Card key={lang.id} icon={icons[lang.icon]} label={lang.name} color={lang.color} onClick={() => toggleProjects(lang)}/>
                ))}
            </div>
        )}

        {selectedLanguage && (
            <div className="projects-container">
                <h4>{selectedLanguage.name} Projects</h4>

                <div className="projects-grid">
                    {selectedLanguage.projects.length > 0 ? 
                    (
                        selectedLanguage.projects.map((prj, i) => (
                            <div key={i} className="project-card">
                                <a href={prj.link} target="_blank" rel="noreferrer">
                                    {prj.name}
                                </a>
                            </div>
                    ))) : ( <p className="no-projects">No projects available yet</p> )}
                </div>
            </div>
        )}
        </section>
    );
}
