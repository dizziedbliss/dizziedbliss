// src/components/TimelineNav.tsx
import React from 'react';

interface TimelineNavProps {
    sections: { name: string; ref: React.RefObject<HTMLDivElement | null> }[];
    scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
    activeTheme: 'A' | 'B';
    activeSection: string;
}

const TimelineNav: React.FC<TimelineNavProps> = ({
    sections,
    scrollToSection,
    activeTheme,
    activeSection
}) => {

    return (
        <nav className={`timeline-nav ${activeTheme === 'A' ? 'theme-a-nav' : 'theme-b-nav'}`}>
            <div className="nav-line"></div>
            <ul className="timeline-sections">
                {sections.map((section) => (
                    <li
                        key={section.name}
                        className={`timeline-section ${activeSection === section.name ? 'active' : ''}`}
                        onClick={() => scrollToSection(section.ref)}
                    >
                        <div className="timeline-marker"></div>
                        <span className="section-name">{section.name}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TimelineNav;