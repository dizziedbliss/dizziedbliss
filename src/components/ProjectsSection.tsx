import { ALL_PROJECTS } from "@/data/projects";
import { Link } from "@/router";
import { Reveal } from "./Reveal";

export function ProjectsSection() {
  return (
    <section id="projects" className="wrap scroll-mt-24 py-24 md:py-32">
      <div className="mb-14 md:mb-20">
        <Reveal>
          <h2 className="display text-[clamp(4.5rem,13vw,10rem)]">Projects</h2>
        </Reveal>
        <Reveal delay={150} className="mt-4">
          <p className="text-xl text-mute md:text-2xl">currently working on</p>
        </Reveal>
      </div>

      <div>
        {ALL_PROJECTS.map((p, i) => (
          <Link
            key={p.slug}
            to={`/project/${p.slug}`}
            className="row group grid grid-cols-[auto_1fr_auto] items-center gap-5 py-8 md:gap-10 md:py-10"
          >
            <span className="row-mute w-10 text-lg tabular-nums text-mute md:w-16 md:text-xl">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="min-w-0">
              <span className="display block text-[clamp(2.25rem,5.5vw,4.5rem)]">{p.name}</span>
              {p.tagline && (
                <span className="row-mute mt-2 block text-lg text-mute md:text-xl">{p.tagline}</span>
              )}
            </span>
            <span className="row-arrow text-4xl md:text-6xl" aria-hidden>
              ↗
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
