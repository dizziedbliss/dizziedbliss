// src/sections/Contact.tsx
import React, { forwardRef } from 'react';

interface SectionProps {
    theme: 'A' | 'B';
}

const Contact = forwardRef<HTMLDivElement, SectionProps>(({ theme }, ref) => {
    return (
        <div ref={ref} id="contact" className={`section contact-section ${theme === 'A' ? 'theme-a-contact' : 'theme-b-contact'}`}>
            {theme === 'A' ? (
                <div className="content-undertale">
                    <h1>Let's Talk: A New Encounter</h1>
                    <p>Ready for a battle... a coding battle? Or just want to say hi? You can reach me at:</p>
                    <div className="contact-links">
                        <a href="mailto:your.email@example.com">Email Me</a>
                        <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
                        <a href="https://github.com/yourprofile">GitHub</a>
                    </div>
                </div>
            ) : (
                <div className="content-minecraft">
                    <h1>Find My Coordinates</h1>
                    <p>Need to connect? Let's build something together! Find me here:</p>
                    <div className="contact-links">
                        <a href="mailto:your.email@example.com">Email</a>
                        <a href="https://twitter.com/yourhandle">Twitter</a>
                        <a href="https://instagram.com/yourhandle">Instagram</a>
                    </div>
                </div>
            )}
        </div>
    );
});

export default Contact;