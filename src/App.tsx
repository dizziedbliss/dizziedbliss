// src/App.tsx
import React, { useRef, useState, useEffect, useMemo } from 'react';
import TimelineNav from './components/TimelineNav';
import Home from './sections/Home';
import Projects from './sections/Projects';
import AboutMe from './sections/AboutMe';
import Contact from './sections/Contact';

import './styles/main.scss';

const App: React.FC = () => {
    // Refs for each theme container and the sections within them
    const themeAContentRef = useRef<HTMLDivElement>(null);
    const themeBContentRef = useRef<HTMLDivElement>(null);

    const sectionRefs = {
        home: useRef<HTMLDivElement>(null),
        projects: useRef<HTMLDivElement>(null),
        about: useRef<HTMLDivElement>(null),
        contact: useRef<HTMLDivElement>(null),
    };

    const [isHoveringB, setIsHoveringB] = useState(false);
    const [appliedTheme, setAppliedTheme] = useState<'A' | 'B'>('A');
    const [activeSection, setActiveSection] = useState('home');
    const [showLoading, setShowLoading] = useState(true);

    const sections = useMemo(() => [
        { name: 'Home', ref: sectionRefs.home },
        { name: 'Projects', ref: sectionRefs.projects },
        { name: 'About Me', ref: sectionRefs.about },
        { name: 'Contact', ref: sectionRefs.contact },
    ], [sectionRefs.home, sectionRefs.projects, sectionRefs.about, sectionRefs.contact]);

    // Synchronize scrolling and handle active section updates
    useEffect(() => {
        const themeA = themeAContentRef.current;
        const themeB = themeBContentRef.current;

        const updateActiveSection = (scrollTop: number) => {
            // Find the section closest to the viewport top
            let currentSection = sections[0].name;
            let minDistance = Infinity;

            sections.forEach(({ name, ref }) => {
                if (ref.current) {
                    const distance = Math.abs(ref.current.offsetTop - scrollTop);
                    if (distance < minDistance) {
                        minDistance = distance;
                        currentSection = name;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        const syncScroll = (e: Event) => {
            const source = e.target as HTMLDivElement;
            const scrollTop = source.scrollTop;

            // Sync scroll position
            if (source === themeA && themeB) {
                themeB.scrollTop = scrollTop;
            } else if (source === themeB && themeA) {
                themeA.scrollTop = scrollTop;
            }

            // Update active section
            updateActiveSection(scrollTop);
        };

        if (themeA && themeB) {
            themeA.addEventListener('scroll', syncScroll, { passive: true });
            themeB.addEventListener('scroll', syncScroll, { passive: true });

            // Initial active section check
            updateActiveSection(themeA.scrollTop);

            return () => {
                themeA.removeEventListener('scroll', syncScroll);
                themeB.removeEventListener('scroll', syncScroll);
            };
        }
    }, [sections]);

    // Loading overlay: show for at least 2.5s on first load
    useEffect(() => {
        const minMs = 2500; // mandatory 2-3 seconds
        const t = setTimeout(() => setShowLoading(false), minMs);
        return () => clearTimeout(t);
    }, []);

    // Apply theme after the slide animation finishes so colors/fonts follow the movement
    useEffect(() => {
        const transitionMs = 500; // match CSS transition (0.5s)
        const t = setTimeout(() => setAppliedTheme(isHoveringB ? 'B' : 'A'), transitionMs);
        return () => clearTimeout(t);
    }, [isHoveringB]);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref.current) {
            const container = themeAContentRef.current;
            if (container) {
                const targetOffset = ref.current.offsetTop;
                container.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
            }
        }
    };

    const handleMouseMove = (e: MouseEvent) => {
        const viewportWidth = window.innerWidth;
        if (e.clientX > viewportWidth * 0.9) {
            setIsHoveringB(true);
        } else if (e.clientX < viewportWidth * 0.1) {
            setIsHoveringB(false);
        }
    };



    useEffect(() => {
        const mainContainer = document.getElementById('main-container');
        if (mainContainer) {
            mainContainer.addEventListener('mousemove', handleMouseMove);
            return () => {
                mainContainer.removeEventListener('mousemove', handleMouseMove);
            };
        }
    }, []);

    return (
        <div id="main-container" className={`app ${appliedTheme === 'B' ? 'theme-b' : 'theme-a'}`}>
            {showLoading && (
                <div className="loading-overlay">
                    <div className="loading-text">
                        {['L', 'O', 'A', 'D', 'I', 'N', 'G'].map((ch, i) => (
                            <span key={i} style={{ ...({ ['--i']: String(i) } as unknown as React.CSSProperties) }}>{ch}</span>
                        ))}
                    </div>
                </div>
            )}
            <TimelineNav
                sections={sections}
                scrollToSection={scrollToSection}
                activeTheme={appliedTheme}
                activeSection={activeSection}
            />
            <div className={`theme-wrapper ${isHoveringB ? 'is-hovering-b' : ''}`}>
                <div className="theme-content theme-a-content" ref={themeAContentRef}>
                    <div className="section-container" ref={sectionRefs.home}>
                        <Home theme="A" />
                    </div>
                    <div className="section-container" ref={sectionRefs.projects}>
                        <Projects theme="A" />
                    </div>
                    <div className="section-container" ref={sectionRefs.about}>
                        <AboutMe theme="A" />
                    </div>
                    <div className="section-container" ref={sectionRefs.contact}>
                        <Contact theme="A" />
                    </div>
                </div>
                <div className="theme-content theme-b-content" ref={themeBContentRef}>
                    <div className="section-container" ref={sectionRefs.home}>
                        <Home theme="B" />
                    </div>
                    <div className="section-container" ref={sectionRefs.projects}>
                        <Projects theme="B" />
                    </div>
                    <div className="section-container" ref={sectionRefs.about}>
                        <AboutMe theme="B" />
                    </div>
                    <div className="section-container" ref={sectionRefs.contact}>
                        <Contact theme="B" />
                    </div>
                </div>
            </div>
            <div
                className="dividing-line"
                style={{
                    left: isHoveringB ? '10vw' : '90vw'
                }}
            ></div>
        </div>
    );
};

export default App;