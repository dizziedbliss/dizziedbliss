// src/sections/Projects.tsx
import React, { forwardRef } from 'react';

interface SectionProps {
    theme: 'A' | 'B';
}

const Projects = forwardRef<HTMLDivElement, SectionProps>(({ theme }, ref) => {
    const techProjects = [
        { title: "React E-commerce Site", description: "A full-stack e-commerce platform.", link: "#" },
        { title: "AI Chatbot", description: "A machine learning-powered chatbot.", link: "#" },
        // Add more tech projects here
    ];

    const designProjects = [
        { title: "Minecraft Resource Pack", description: "Custom textures and models.", link: "#" },
        { title: "Undertale Fanart Gallery", description: "Digital art and character designs.", link: "#" },
        // Add more design projects here
    ];

    return (
        <div ref={ref} id="projects" className={`section projects-section ${theme === 'A' ? 'theme-a-projects' : 'theme-b-projects'}`}>
            {theme === 'A' ? (
                <div className="content-undertale">
                    <h1>Tech Projects: The Soul of a Programmer</h1>
                    <div className="project-grid">
                        {techProjects.map((project, index) => (
                            <div key={index} className="project-card">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.link}>View Project</a>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="content-minecraft">
                    <h1>Creative Works: My Crafting Table</h1>
                    <div className="project-grid">
                        {designProjects.map((project, index) => (
                            <div key={index} className="project-card">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.link}>View Work</a>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
});

export default Projects;