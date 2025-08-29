// src/sections/AboutMe.tsx
import React, { forwardRef } from 'react';

interface SectionProps {
    theme: 'A' | 'B';
}

const AboutMe = forwardRef<HTMLDivElement, SectionProps>(({ theme }, ref) => {
    return (
        <div ref={ref} id="about-me" className={`section about-me-section ${theme === 'A' ? 'theme-a-about' : 'theme-b-about'}`}>
            {theme === 'A' ? (
                <div className="content-undertale">
                    <h1>About The Human</h1>
                    <p>I fell into the world of code and never looked back. My journey began with simple C++ commands, but has grown into a love for building complex, beautiful, and functional applications. I'm a fan of elegant solutions and clean code. My special abilities include React spells and Typescript incantations.</p>
                </div>
            ) : (
                <div className="content-minecraft">
                    <h1>My Storybook</h1>
                    <p>When I'm not building digital worlds, you can find me sketching, designing, and exploring creative hobbies. My artistic side is my happy place, where I love to craft new things from scratch. I'm always looking for new inspiration and materials to add to my inventory.</p>
                </div>
            )}
        </div>
    );
});

export default AboutMe;