import { imgDoodleSwirl, imgSticker, imgSelfie, imgDraw } from "@/config/assets";
import { SectionHead } from "./SectionHead";

export function AboutSection() {
  return (
    <section id="about" className="site-section py-16 md:py-20 relative">
      {/* Section doodles */}
      <img
        src={imgDoodleSwirl}
        alt=""
        aria-hidden
        className="absolute top-8 right-[-20px] w-28 opacity-15 pointer-events-none"
        style={{ transform: "rotate(-30deg)" }}
      />
      <img
        src={imgSticker}
        alt=""
        aria-hidden
        className="absolute bottom-12 left-6 w-16 opacity-20 pointer-events-none"
        style={{ transform: "rotate(12deg)" }}
      />

      <SectionHead accent="About" sub="Me, Myself & I" />

      {/* flex row — both children grow/shrink together */}
      <div className="flex flex-col md:flex-row gap-6 items-stretch w-full">
        {/* Bio card — takes 2/3 */}
        <div className="flex-[2] min-w-0 bg-surface border-[4px] border-paper rounded-[28px] shadow-card p-6 sm:p-8 md:p-10">
          <div
            className="text-coral text-sm sm:text-base md:text-2xl leading-relaxed space-y-4"
            style={{ fontFamily: "'Gafata', sans-serif" }}
          >
            <p>Hey, I'm Adithya, but I'm well known as Max!! accross my friend groups :)</p>
            <p>
              I'm a uni student pursuing computer science, I love to build things, and break
              things as well, and spend more time figuring out why it broke, and trying to fix
              it.
            </p>
            <p>
              I spend all my time somewhere between software, systems and cloud — also I'll be
              hopping over to linux from windows frequently whenever i get annoyed from
              windows' design and come back when i spend my whole month fixing things that i broke.
            </p>
            <p>
              Well, beyond computers, I love physics, space, quantum mechanics and weird
              fundamental things that run this universe, and also a lot of gaming and watching
              horror and scifi shows. &amp; yah I can also draw :3
            </p>
          </div>
        </div>

        {/* Photo — takes 1/3, matches card height via items-stretch */}
        <div className="hidden md:block flex-[1] min-w-0 bg-white shadow-xl overflow-hidden rounded-lg">
          <img
            src={imgSelfie}
            alt="Adithya selfie"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      <img
        src={imgDraw}
        alt=""
        aria-hidden
        className="mt-6 w-16 md:w-20 opacity-60 pointer-events-none select-none"
      />
    </section>
  );
}
