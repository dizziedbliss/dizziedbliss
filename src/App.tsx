// ─── Personal Portfolio — Max!! (Adithya) ────────────────────────────────────

import { useRef, useState, useEffect } from "react";

import imgTextureBg from "@/imports/Desktop1/6ba94fb3ac94a885d55141996b172d8a4999bbf3.png";
import imgDoodleSwirl from "@/imports/Desktop1/aa85ea2ee1cdb5fde09d13a96a465b846ae1aaa6.png";
import imgDoodleSmall from "@/imports/Desktop1/45cf73ae34652c65c8a4b8694c6db1c5b3394dab.png";
import imgProjectThumb from "@/imports/Desktop1/e10667a30796e3b65c25e49fed4ad4eab21ad415.png";
import imgPortrait from "@/imports/Desktop1/c32a6004f1e934931528b549ac769954d68f2df5.png";
import imgPortrait2 from "@/imports/Desktop1/d116435f8d6d856b6546245594c942ceb26cba4c.png";
import imgDraw from "@/imports/Desktop1/a93994d544d1da0fb0129a9a5d51ba7ad5ec628a.png";
import imgSelfie from "@/imports/Desktop1/3081c4ba8b7bc7185808630de9a1c36b98c83e87.png";
import imgSticker from "@/imports/Desktop1/233439631042d4cacdfc5151fa62ec29d2649663.png";

const SECTION = "w-full px-6 sm:px-10 md:px-16 lg:px-24";

// ─── Pill button ──────────────────────────────────────────────────────────────
function PillBtn({ children, href, onClick }: { children: React.ReactNode; href?: string; onClick?: () => void }) {
  const inner = (
    <div className="bg-[rgba(64,64,64,0.89)] border-[4px] border-[#faf8f2] rounded-full shadow-[4px_6px_10px_rgba(0,0,0,0.55)] px-6 py-2 inline-flex items-center justify-start cursor-pointer transition-transform duration-150 hover:scale-110 active:scale-95">
      <span className="text-[#fd9284] text-xl sm:text-2xl md:text-3xl leading-snug whitespace-nowrap select-none"
        style={{ fontFamily: "'Matemasie', sans-serif" }}>
        {children}
      </span>
    </div>
  );
  if (href) return <a href={href} target="_blank" rel="noreferrer">{inner}</a>;
  if (onClick) return <button onClick={onClick} className="appearance-none bg-transparent border-none p-0">{inner}</button>;
  return <>{inner}</>;
}

// ─── Section heading ──────────────────────────────────────────────────────────
function SectionHead({ accent, sub }: { accent: string; sub: string }) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="text-[#fd9284] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900 }}>{accent}</p>
      <p className="text-[#1b1b1b] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>{sub}</p>
    </div>
  );
}

// ─── Scattered doodle decoration ──────────────────────────────────────────────
// Fixed-position decorations layered behind content throughout the page
function PageDoodles() {
  return (
    <div className="pointer-events-none select-none" aria-hidden>
      {/* Top-right swirl */}
      <img src={imgDoodleSwirl} alt=""
        className="fixed top-[6vh] right-[-60px] w-48 md:w-64 opacity-20 z-0"
        style={{ transform: "rotate(-25deg)" }} />
      {/* Mid-left draw */}
      <img src={imgDraw} alt=""
        className="fixed top-[38vh] left-[-20px] w-24 md:w-36 opacity-15 z-0"
        style={{ transform: "rotate(12deg)" }} />
      {/* Mid-right small doodle */}
      <img src={imgDoodleSmall} alt=""
        className="fixed top-[55vh] right-[2vw] w-20 md:w-28 opacity-20 z-0"
        style={{ transform: "rotate(42deg)" }} />
      {/* Lower-left swirl */}
      <img src={imgDoodleSwirl} alt=""
        className="fixed bottom-[22vh] left-[-40px] w-40 md:w-56 opacity-10 z-0"
        style={{ transform: "rotate(70deg) scaleX(-1)" }} />
      {/* Lower-right sticker */}
      <img src={imgSticker} alt=""
        className="fixed bottom-[8vh] right-[4vw] w-20 md:w-28 opacity-20 z-0"
        style={{ transform: "rotate(-15deg)" }} />
      {/* Center-top draw */}
      <img src={imgDraw} alt=""
        className="fixed top-[72vh] left-[40vw] w-16 md:w-24 opacity-10 z-0"
        style={{ transform: "rotate(-30deg)" }} />
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav className={`${SECTION} fixed z-1000 flex items-center justify-between -my-6`}>
      <span className="text-[#fd9284] text-2xl md:text-3xl"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900 }}>Max!!</span>
      <ul className="hidden md:flex gap-8 lg:gap-12 text-[#1b1b1b] text-sm"
        style={{ fontFamily: "'Inter', sans-serif" }}>
        {["Home", "Projects", "Profiles", "About"].map((s) => (
          <li key={s}>
            <a href={`#${s.toLowerCase()}`}
              className="opacity-60 hover:opacity-100 hover:text-[#fd9284] transition-all duration-200">{s}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ─── Home section ─────────────────────────────────────────────────────────────
function HomeSection() {
  return (
    <section id="home" className={`${SECTION} relative pb-16 overflow-hidden `} style={{ marginTop: 51, marginBottom: 51 }}>
      {/* Coral corner — top left */}
      <div className="z-0 absolute top-0 left-0 w-32 h-32 pointer-events-none select-none overflow-hidden">
        <div className="absolute -top-8 -left-8 w-44 h-44 bg-[#fd9284] rotate-[30deg]" />
      </div>
      {/* Coral corner — bottom left */}
      <div className="z-0 absolute bottom-6 left-0 w-20 h-28 pointer-events-none select-none overflow-hidden">
        <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-[#fd9284] rotate-[15deg]" />
      </div>
      {/* Inline doodles inside home */}
      <img src={imgDoodleSmall} alt="" aria-hidden
        className="absolute top-4 right-[30%] w-14 opacity-30 pointer-events-none"
        style={{ transform: "rotate(20deg)" }} />
      <img src={imgSticker} alt="" aria-hidden
        className="absolute bottom-8 right-[8%] w-16 opacity-25 pointer-events-none"
        style={{ transform: "rotate(-10deg)" }} />

      <div className="flex flex-col md:flex-row items-start justify-center-safe ice gap-10 pt-6 z-1000">
        {/* Text */}
        <div className="flex w-auto flex-col items-start justify-start p-10">
          <div className="flex items-center gap-3 mb-4">
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none" className="shrink-0 opacity-80">
              <line x1="4" y1="4" x2="36" y2="36" stroke="#1b1b1b" strokeWidth="5" strokeLinecap="round" />
              <line x1="36" y1="4" x2="4" y2="36" stroke="#1b1b1b" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900 }}>
              <span className="text-[#1b1b1b]">I'm </span>
              <span className="text-[#fd9284]">Max!!</span>
            </h1>
          </div>
          <p className="text-[#1b1b1b] text-sm sm:text-base leading-snug mb-8 opacity-75 max-w-sm"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
            I build intelligent systems, weird interfaces and occasionally overthink quantum physics at 2am
          </p>
          <PillBtn href="mailto:adithya@example.com">get in touch</PillBtn>
          <img src={imgDoodleSmall} alt="" aria-hidden
            className="mt-8 w-16 md:w-20 opacity-60 pointer-events-none select-none" />
        </div>

        {/* Portraits */}
        <div className="relative flex-shrink-0 w-64 h-72 sm:w-80 sm:h-80 md:w-96 md:h-[360px] self-center">
          <div className="z-10 absolute left-0 top-6 bg-white p-2 shadow-lg"
            style={{ width: "47%", paddingTop: "60%", transform: "rotate(-4deg)" }}>
            <img src={imgPortrait2} alt="Adithya"
              className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover" />
          </div>
          <div className="absolute right-0 top-0 bg-white p-2 shadow-xl"
            style={{ width: "50%", paddingTop: "63%", transform: "rotate(2deg)" }}>
            <img src={imgPortrait} alt="Adithya portrait"
              className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover" />
          </div>
          <img src={imgDoodleSwirl} alt="" aria-hidden
            className="absolute -bottom-6 -right-4 w-20 opacity-40 pointer-events-none select-none"
            style={{ transform: "rotate(10deg)" }} />
        </div>
      </div>
    </section>
  );
}

// ─── Projects section ─────────────────────────────────────────────────────────
const ALL_PROJECTS = [
  {
    title: "Winter - Deployment Platform",
    description: "CLI-based deployment platform automating Docker application workflows through a single winter deploy command; automatically discovers projects, validates Dockerfiles, and executes image builds with an interactive terminal UI for build status and errors.",
    href: "https://github.com/dizziedbliss/winter",
  },
  {
    title: "Yorozuya - Job Discovery Platform",
    description: "Built and deployed a full-stack job discovery platform for collecting, filtering, customizing, and ranking opportunities by user-defined requirements; developed an asynchronous FastAPI backend and React/Tailwind frontend, containerized with Docker.",
    href: "https://github.com/dizziedbliss/yorozuya",
  },

  {
    title: "Miku - Discord Bot",
    description: "Another discord utility bot hehehehe",
    href: "https://github.com/dizziedbliss/miku",
  },
  {
    title: "IDP - Guide allocation system",
    description: "A college project management platform that enables students to form interdisciplinary teams and get allocated faculty guides through a fair, capacity-aware system. Features team creation, domain selection, guide preferences, allocation tracking",
    href: "https://github.com/dizziedbliss/Guidehub",
  },
  {
    title: "ME-RIISE Hiring'2k25",
    description: "Well, a website which was made to create impression among freshers using peeakk marketing strategy lol...",
    href: "https://github.com/pgyunknown/hiring2k25",
  },
  {
    title: "Frisk - The Best Discord Bot",
    description: "An Undertale inspired discord utility bot. Well, it was made just for fun, but it's pretty cool.",
    href: "https://github.com/dizziedbliss/Frisk",
  },

];
const INITIAL_COUNT = 2;

function ProjectsSection() {
  const [showCount, setShowCount] = useState(INITIAL_COUNT);
  const visible = ALL_PROJECTS.slice(0, showCount);
  const hasMore = showCount < ALL_PROJECTS.length;

  return (
    <section id="projects" className={`${SECTION} py-16 md:py-20 relative`}>
      {/* Section doodles */}
      <img src={imgDraw} alt="" aria-hidden
        className="absolute right-0 top-8 w-16 md:w-24 opacity-20 pointer-events-none"
        style={{ transform: "rotate(-45deg)" }} />
      <img src={imgDoodleSwirl} alt="" aria-hidden
        className="absolute left-[-30px] bottom-24 w-32 opacity-10 pointer-events-none"
        style={{ transform: "rotate(55deg)" }} />

      <SectionHead accent="Currently" sub="Working on" />

      <div className="flex flex-col gap-6 w-full">
        {visible.map((p, i) => (
          <a key={i} href={p.href} target="_blank" rel="noreferrer" className="block group w-full">
            <div className="w-full bg-[rgba(64,64,64,0.89)] border-[5px] border-white rounded-[28px] shadow-[8px_8px_0px_#faf8f2] p-5 sm:p-6 md:p-8 flex items-center gap-5 md:gap-8 transition-transform duration-200 hover:scale-[1.015]">
              <div className="flex-1 min-w-0">
                <h3 className="text-[#faf8f2] text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>{p.title}</h3>
                <p className="text-[#faf8f2] text-xs sm:text-sm leading-relaxed opacity-85 line-clamp-3"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>{p.description}</p>
                <p className="mt-3 text-[#fd9284] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  click to redirect →
                </p>
              </div>
              <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-white/20">
                <img src={imgProjectThumb} alt={p.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </a>
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-end">
          <PillBtn onClick={() => setShowCount((c) => Math.min(c + 2, ALL_PROJECTS.length))}>
            Show more
          </PillBtn>
        </div>
      )}
      {!hasMore && showCount > INITIAL_COUNT && (
        <div className="mt-10 flex justify-end">
          <PillBtn onClick={() => setShowCount(INITIAL_COUNT)}>Show less</PillBtn>
        </div>
      )}
    </section>
  );
}

// ─── Floating pill — pure idle bob, gentle cursor attraction ──────────────────
// Pills drift like paper on still water: slow sinusoidal bob per pill.
// When cursor is nearby, they drift softly toward it (attraction, not repulsion)
// so you can always reach and click them.
function FloatingPill({
  label, href, restX, restY, containerRef,
}: {
  label: string;
  href: string;
  restX: number;
  restY: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const pillRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [phase] = useState(() => Math.random() * Math.PI * 2);
  // Each pill gets a slightly different bob speed so they feel independent
  const [speed] = useState(() => 0.5 + Math.random() * 0.4);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onMove = (e: MouseEvent) => {
      const r = container.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onLeave = () => { mouseRef.current = null; };
    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseleave", onLeave);
    return () => {
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, [containerRef]);

  useEffect(() => {
    let start: number | null = null;
    let curX = 0, curY = 0;
    let velX = 0, velY = 0;

    const tick = (t: number) => {
      if (!start) start = t;
      const elapsed = (t - start) / 1000;

      // Idle bob target — slow, dreamy, per-pill random phase & speed
      let targetX = Math.sin(elapsed * speed + phase) * 10;
      let targetY = Math.cos(elapsed * speed * 0.7 + phase) * 8;

      // Soft cursor attraction — pills gently drift toward cursor like
      // leaves being pulled by a slow current; stops within 20px so clickable
      const container = containerRef.current;
      const pill = pillRef.current;
      if (container && pill && mouseRef.current) {
        const cw = container.offsetWidth;
        const ch = container.offsetHeight;
        const pw = pill.offsetWidth;
        const ph = pill.offsetHeight;
        const px = (restX / 100) * cw + curX + pw / 2;
        const py = (restY / 100) * ch + curY + ph / 2;
        const dx = mouseRef.current.x - px;
        const dy = mouseRef.current.y - py;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const ATTRACT_ZONE = 220;
        if (dist < ATTRACT_ZONE && dist > 20) {
          // Gentle pull — linear falloff, max 18px drift
          const strength = ((ATTRACT_ZONE - dist) / ATTRACT_ZONE) * 18;
          targetX += (dx / dist) * strength;
          targetY += (dy / dist) * strength;
        }
      }

      // Spring physics — soft, underdamped for a floaty feel
      const spring = 0.055;
      const damping = 0.88;
      velX = velX * damping + (targetX - curX) * spring;
      velY = velY * damping + (targetY - curY) * spring;
      curX += velX;
      curY += velY;

      setOffset({ x: curX, y: curY });
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [restX, restY, phase, speed, containerRef]);

  return (
    <div
      ref={pillRef}
      style={{
        position: "absolute",
        left: `${restX}%`,
        top: `${restY}%`,
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        willChange: "transform",
      }}
    >
      <a href={href} target="_blank" rel="noreferrer" className="block">
        <div className="bg-[rgba(64,64,64,0.89)] border-[4px] border-[#faf8f2] rounded-full shadow-[4px_6px_10px_rgba(0,0,0,0.55)] px-6 py-2 inline-flex items-center justify-start cursor-pointer transition-[filter,transform] duration-150 hover:scale-110 active:scale-95 hover:brightness-110">
          <span className="text-[#fd9284] text-xl sm:text-2xl md:text-3xl leading-snug whitespace-nowrap select-none"
            style={{ fontFamily: "'Matemasie', sans-serif" }}>
            {label}
          </span>
        </div>
      </a>
    </div>
  );
}

// ─── Profiles section ─────────────────────────────────────────────────────────
const PROFILE_PILLS = [
  { label: "LinkedIN", href: "https://linkedin.com/in/dizziedbliss", restX: 5, restY: 15 },
  { label: "Github", href: "https://github.com/dizziedbliss", restX: 46, restY: 8 },
  { label: "Discord", href: "https://discord.com/users/dizziedbliss", restX: 20, restY: 58 },
  { label: "Resume", href: "https://drive.google.com/file/d/1aK8wLhOJcn4xlEZjVcS4rd9UNP95_vUW/view?usp=sharing", restX: 58, restY: 50 },
];

function ProfilesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <section id="profiles" className={`${SECTION} py-16 md:py-20 relative`}>
      {/* Section doodles */}
      <img src={imgDoodleSmall} alt="" aria-hidden
        className="absolute top-10 right-8 w-16 opacity-20 pointer-events-none"
        style={{ transform: "rotate(65deg)" }} />
      <img src={imgDraw} alt="" aria-hidden
        className="absolute bottom-10 left-10 w-20 opacity-15 pointer-events-none"
        style={{ transform: "rotate(8deg)" }} />

      <SectionHead accent="Profiles" sub="across the universe" />

      <div
        ref={containerRef}
        className="relative w-full"
        style={{ height: "clamp(300px, 38vw, 480px)" }}
      >
        {PROFILE_PILLS.map((p) => (
          <FloatingPill
            key={p.label}
            label={p.label}
            href={p.href}
            restX={p.restX}
            restY={p.restY}
            containerRef={containerRef}
          />
        ))}
      </div>
    </section>
  );
}

// ─── About section ────────────────────────────────────────────────────────────
// Photo is in the same flex row as the bio card and grows/shrinks with it
function AboutSection() {
  return (
    <section id="about" className={`${SECTION} py-16 md:py-20 relative`}>
      {/* Section doodles */}
      <img src={imgDoodleSwirl} alt="" aria-hidden
        className="absolute top-8 right-[-20px] w-28 opacity-15 pointer-events-none"
        style={{ transform: "rotate(-30deg)" }} />
      <img src={imgSticker} alt="" aria-hidden
        className="absolute bottom-12 left-6 w-16 opacity-20 pointer-events-none"
        style={{ transform: "rotate(12deg)" }} />

      <SectionHead accent="About" sub="Me, Myself & I" />

      {/* flex row — both children grow/shrink together */}
      <div className="flex flex-col md:flex-row gap-6 items-stretch w-full">
        {/* Bio card — takes 2/3 */}
        <div className="flex-[2] min-w-0 bg-[rgba(64,64,64,0.89)] border-[4px] border-[#faf8f2] rounded-[28px] shadow-[4px_7px_10px_rgba(0,0,0,0.55)] p-6 sm:p-8 md:p-10">
          <div className="text-[#fd9284] text-sm sm:text-base md:text-2xl leading-relaxed space-y-4"
            style={{ fontFamily: "'Gafata', sans-serif" }}>
            <p>Hey, I'm Adithya, but I'm well known as Max!! accross my friend groups :)</p>
            <p>I'm a uni student pursuing computer science, I love to build things, and break things as well, and spend more time figuring out why it broke, and trying to fix it.</p>
            <p>I spend all my time somewhere between software, systems and cloud — also I'll be hopping over to linux from windows frequently whenever i get annoyed from windows' design and come back when i spend my whole month fixing things that i broke.</p>
            <p>Well, beyond computers, I love physics, space, quantum mechanics and weird fundamental things that run this universe, and also a lot of gaming and watching horror and scifi shows. &amp; yah I can also draw :3</p>
          </div>
        </div>

        {/* Photo — takes 1/3, matches card height via items-stretch */}
        <div className="hidden md:block flex-[1] min-w-0 bg-white shadow-xl overflow-hidden rounded-lg">
          <img src={imgSelfie} alt="Adithya selfie"
            className="w-full h-full object-cover object-top" />
        </div>
      </div>

      <img src={imgDraw} alt="" aria-hidden
        className="mt-6 w-16 md:w-20 opacity-60 pointer-events-none select-none" />
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className={`${SECTION} py-8 text-center text-[#1b1b1b] opacity-35 text-xs`}
      style={{ fontFamily: "'Inter', sans-serif" }}>
      made with care by Max!! · {new Date().getFullYear()}
    </footer>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{
        backgroundColor: "#faf8f2",
        backgroundImage: `
          linear-gradient(rgba(59,157,221,0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59,157,221,0.15) 1px, transparent 1px)
        `,
        backgroundSize: "32px 32px",
      }}
    >
      {/* Full-page texture */}
      <img src={imgTextureBg} alt="" aria-hidden
        className="fixed inset-0 w-full h-full object-cover opacity-10 pointer-events-none select-none"
        style={{ zIndex: 0 }} />

      {/* Fixed scattered doodles behind all content */}
      <PageDoodles />

      <div className="relative z-10">
        <Nav />
        <HomeSection />
        <ProjectsSection />
        <ProfilesSection />
        <AboutSection />
        <Footer />
      </div>
    </div>
  );
}
