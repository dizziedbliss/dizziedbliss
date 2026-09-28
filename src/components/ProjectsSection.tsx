import { useState } from "react";
import { imgDraw, imgDoodleSwirl } from "@/config/assets";
import { ALL_PROJECTS, INITIAL_PROJECT_COUNT } from "@/data/projects";
import { PillBtn } from "./PillBtn";
import { SectionHead } from "./SectionHead";

export function ProjectsSection() {
  const [showCount, setShowCount] = useState(INITIAL_PROJECT_COUNT);
  const visible = ALL_PROJECTS.slice(0, showCount);
  const hasMore = showCount < ALL_PROJECTS.length;

  return (
    <section id="projects" className="site-section py-16 md:py-20 relative">
      {/* Section doodles */}
      <img
        src={imgDraw}
        alt=""
        aria-hidden
        className="absolute right-0 top-8 w-16 md:w-24 opacity-20 pointer-events-none"
        style={{ transform: "rotate(-45deg)" }}
      />
      <img
        src={imgDoodleSwirl}
        alt=""
        aria-hidden
        className="absolute left-[-30px] bottom-24 w-32 opacity-10 pointer-events-none"
        style={{ transform: "rotate(55deg)" }}
      />

      <SectionHead accent="Currently" sub="Working on" />

      <div className="flex flex-col gap-6 w-full">
        {visible.map((p, i) => (
          <a
            key={i}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="block group w-full"
          >
            <div className="w-full bg-surface border-[5px] border-white rounded-[28px] shadow-[8px_8px_0px_#faf8f2] p-5 sm:p-6 md:p-8 flex items-center gap-5 md:gap-8 transition-transform duration-200 hover:scale-[1.015]">
              <div className="flex-1 min-w-0">
                <h3
                  className="text-[#faf8f2] text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-[#faf8f2] text-xs sm:text-sm leading-relaxed opacity-85 line-clamp-3"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                >
                  {p.description}
                </p>
                <p
                  className="mt-3 text-coral text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  click to redirect →
                </p>
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

      {!hasMore && showCount > INITIAL_PROJECT_COUNT && (
        <div className="mt-10 flex justify-end">
          <PillBtn onClick={() => setShowCount(INITIAL_PROJECT_COUNT)}>Show less</PillBtn>
        </div>
      )}
    </section>
  );
}
