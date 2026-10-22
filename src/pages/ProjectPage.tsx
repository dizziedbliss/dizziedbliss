import { ALL_PROJECTS } from "@/data/projects";
import { Link } from "@/router";
import { CatBox } from "@/components/CatBox";
import { Reveal, RevealImage } from "@/components/Reveal";
import { usePageTitle } from "@/usePageTitle";
import { NotFoundPage } from "./NotFoundPage";

export function ProjectPage({ slug }: { slug: string }) {
  const index = ALL_PROJECTS.findIndex((p) => p.slug === slug);
  const project = ALL_PROJECTS[index];
  usePageTitle(project ? `${project.name} · Max!!` : "404 · The page is not alive · Max!!");

  if (!project) return <NotFoundPage />;

  const count = ALL_PROJECTS.length;
  const next = ALL_PROJECTS[(index + 1) % count];
  const prev = ALL_PROJECTS[(index - 1 + count) % count];
  const images = project.images ?? [];

  return (
    <article className="wrap pt-40 pb-24 md:pt-48 md:pb-32">
      <Reveal delay={350}>
        <Link to="/" section="projects" className="navlink text-lg text-mute">
          ← all projects
        </Link>
      </Reveal>

      <header className="mt-10 md:mt-14">
        <Reveal delay={400}>
          <p className="mb-4 text-lg tabular-nums text-mute md:text-xl">
            {String(index + 1).padStart(2, "0")} / {String(ALL_PROJECTS.length).padStart(2, "0")}
          </p>
        </Reveal>
        <Reveal delay={450}>
          <h1 className="display text-[clamp(3.75rem,11vw,9rem)]">{project.name}</h1>
        </Reveal>
        {project.tagline && (
          <Reveal delay={550} className="mt-4">
            <p className="text-xl text-mute md:text-2xl">{project.tagline}</p>
          </Reveal>
        )}
        {project.stack && project.stack.length > 0 && (
          <Reveal delay={650} className="mt-6">
            <ul className="flex flex-wrap text-base text-mute" aria-label="Built with">
              {project.stack.map((s) => (
                <li
                  key={s}
                  className="after:mx-2.5 after:content-['·'] last:after:content-none"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </header>

      <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
        <div className="flex flex-col gap-6 text-xl leading-relaxed md:text-2xl">
          <Reveal delay={700}>
            <p className="group text-mute">
              <Described project={project} />
            </p>
          </Reveal>
          {project.details?.map((para) => (
            <Reveal key={para}>
              <p className="text-mute">{para}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={750}>
          <div className="flex flex-wrap gap-4">
            {project.gone && (
              <figure className="w-full max-w-[9rem]">
                <img
                  src="/projects/cat-yoinked.png"
                  alt="A scared black cat"
                  className="gone-cat w-full"
                />
                <figcaption className="mt-2 text-lg text-mute">
                  the cat yoinked the link away
                </figcaption>
              </figure>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-solid">
                Live site <span aria-hidden>↗</span>
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className={project.live ? "btn" : "btn btn-solid"}
              >
                GitHub <span aria-hidden>↗</span>
              </a>
            )}
          </div>
        </Reveal>
      </div>

      {(!project.gone || images.length > 0) && (
      <div
        className={`mt-16 grid gap-6 md:mt-24 ${images.length > 1 ? "md:grid-cols-2" : ""}`}
      >
        {images.length > 0 ? (
          images.map((img, i) => (
            <RevealImage
              key={img.src}
              delay={(i % 2) * 120}
              className={i === 0 && images.length % 2 === 1 ? "md:col-span-2" : ""}
            >
              <img src={img.src} alt={img.alt} className="w-full border border-line" />
            </RevealImage>
          ))
        ) : (
          <RevealImage>
            <CatBox caption="The cat is alive. The image is not." className="w-full py-14" />
          </RevealImage>
        )}
      </div>
      )}

      <div className="mt-24 grid gap-6 md:mt-32 md:grid-cols-[1fr_4fr]">
        <Link
          to={`/project/${prev.slug}`}
          className="row group order-2 flex items-end justify-between gap-4 border-b border-line py-8 md:order-1 md:py-10"
        >
          <span className="min-w-0">
            <span className="row-mute mb-2 block text-base text-mute">← Previous</span>
            <span className="display block truncate text-2xl md:text-3xl">{prev.name}</span>
          </span>
        </Link>
        <Link
          to={`/project/${next.slug}`}
          className="row group order-1 flex items-end justify-between gap-6 py-10 md:order-2 md:py-14"
        >
          <span>
            <span className="row-mute mb-2 block text-lg text-mute">Next project</span>
            <span className="display block text-[clamp(2.5rem,7vw,6rem)]">{next.name}</span>
          </span>
          <span className="row-arrow text-5xl md:text-7xl" aria-hidden>
            →
          </span>
        </Link>
      </div>
    </article>
  );
}

/** The description, with `project.term` underlined and its info revealed beneath on hover or focus. */
function Described({ project }: { project: (typeof ALL_PROJECTS)[number] }) {
  const { description, term } = project;
  const at = term ? description.indexOf(term.word) : -1;
  if (!term || at < 0) return <>{description}</>;
  return (
    <>
      {description.slice(0, at)}
      <span
        tabIndex={0}
        className="term cursor-help text-ink underline decoration-dotted underline-offset-4"
      >
        {term.word}
      </span>
      {description.slice(at + term.word.length)}
      <span className="block max-h-0 overflow-hidden text-lg opacity-0 transition-all duration-500 group-has-[.term:hover]:mt-3 group-has-[.term:hover]:max-h-24 group-has-[.term:hover]:opacity-100 group-has-[.term:focus-visible]:mt-3 group-has-[.term:focus-visible]:max-h-24 group-has-[.term:focus-visible]:opacity-100">
        ↳ {term.info}
      </span>
    </>
  );
}
