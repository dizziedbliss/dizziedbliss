// src/sections/Home.tsx
import React, { forwardRef } from 'react';

interface SectionProps {
    theme: 'A' | 'B';
}

const Home = forwardRef<HTMLDivElement, SectionProps>(({ theme }, ref) => {
    return (
        <div ref={ref} id="home" className={`section home-section ${theme === 'A' ? 'theme-a-home' : 'theme-b-home'}`}>
            {theme === 'A' ? (
                <div className="content-undertale">
                    <h1>Flowey's Guide to My Portfolio</h1>
                    <p>Howdy! I'm [Your Name], a developer with a passion for building cool stuff. Welcome to my web, pal!</p>
                </div>
            ) : (
                <div className="content-minecraft">
                    <h1>Welcome to My Cottage</h1>
                    <p>Hey! I'm [Your Name], and this is my little corner of the internet. Hope you enjoy the view!</p>
                </div>
            )}
        </div>
    );
});

export default Home;