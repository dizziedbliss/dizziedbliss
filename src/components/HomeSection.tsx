import { imgPortrait2 } from "@/config/assets";
import { Link } from "@/router";
import { Reveal, RevealImage } from "./Reveal";

export function HomeSection() {
  return (
    <section id="home" className="wrap pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <Reveal delay={350}>
            <p className="mb-6 text-lg tracking-wide text-mute md:text-xl">Hello, I'm</p>
          </Reveal>

          <div className="relative">
            <Reveal delay={450}>
              <h1 className="display text-[clamp(4.5rem,13vw,11rem)]">Adithya</h1>
            </Reveal>
          </div>

          <Reveal delay={900} className="mt-10 max-w-xl">
            <p className="text-xl leading-relaxed text-mute md:text-2xl">
              I build intelligent systems, weird interfaces and occasionally overthink quantum
              physics at 2am.
            </p>
          </Reveal>

          <Reveal delay={1000} className="mt-10">
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/" section="projects" className="btn btn-solid">
                Open the box <span aria-hidden>↓</span>
              </Link>
              <Link to="/contact" className="btn">
                Say hello <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={1100} className="mt-8">
            <p className="text-base text-mute">
              You can't really know me until you look. Go ahead, observe.
            </p>
          </Reveal>
        </div>

        <RevealImage delay={500} className="mx-auto w-full max-w-md lg:max-w-none">
          <div className="aspect-[3/4] w-full overflow-hidden border border-line">
            <img
              src={imgPortrait2}
              alt="Adithya"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </RevealImage>
      </div>
    </section>
  );
}
