import { imgPortrait } from "@/config/assets";
import { Reveal, RevealImage } from "./Reveal";

export function AboutSection() {
  return (
    <section id="about" className="wrap scroll-mt-24 py-24 md:py-32">
      <div className="mb-14 md:mb-20">
        <Reveal>
          <h2 className="display text-[clamp(4.5rem,13vw,10rem)]">About</h2>
        </Reveal>
        <Reveal delay={150} className="mt-4">
          <p className="text-xl text-mute md:text-2xl">me, myself &amp; I</p>
        </Reveal>
      </div>

      <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <div className="flex flex-col gap-8 text-xl leading-relaxed text-mute md:text-2xl">
          <Reveal>
            <p className="display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.1] text-ink">
              Hey, I'm Adithya, but I'm well known as Max!! across my friend groups :)
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p>
              I'm a uni student pursuing computer science, I love to build things, and break things
              as well, and spend more time figuring out why it broke, and trying to fix it.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p>
              I spend all my time somewhere between software, systems and cloud — also I'll be
              hopping over to linux from windows frequently whenever i get annoyed from windows'
              design and come back when i spend my whole month fixing things that i broke.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              Well, beyond computers, I love physics, space, quantum mechanics and weird
              fundamental things that run this universe, and also a lot of gaming and watching
              horror and scifi shows. &amp; yah I can also draw :3
            </p>
          </Reveal>
        </div>

        <RevealImage className="mx-auto w-full max-w-md lg:max-w-none">
          <div className="aspect-[3/4] w-full overflow-hidden border border-line">
            <img src={imgPortrait} alt="Adithya" className="h-full w-full object-cover" />
          </div>
        </RevealImage>
      </div>
    </section>
  );
}
