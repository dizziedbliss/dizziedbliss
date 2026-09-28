import { useRef } from "react";
import { imgDoodleSmall, imgDraw } from "@/config/assets";
import { PROFILE_PILLS } from "@/data/profiles";
import { FloatingPill } from "./FloatingPill";
import { SectionHead } from "./SectionHead";

export function ProfilesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="profiles" className="site-section py-16 md:py-20 relative">
      {/* Section doodles */}
      <img
        src={imgDoodleSmall}
        alt=""
        aria-hidden
        className="absolute top-10 right-8 w-16 opacity-20 pointer-events-none"
        style={{ transform: "rotate(65deg)" }}
      />
      <img
        src={imgDraw}
        alt=""
        aria-hidden
        className="absolute bottom-10 left-10 w-20 opacity-15 pointer-events-none"
        style={{ transform: "rotate(8deg)" }}
      />

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
