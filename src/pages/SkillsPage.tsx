import { SKILL_GROUPS } from "@/data/skills";
import { Reveal } from "@/components/Reveal";
import { usePageTitle } from "@/usePageTitle";

export function SkillsPage() {
  usePageTitle("Skills · Max!!");

  return (
    <section className="wrap pt-40 pb-24 md:pt-48 md:pb-32">
      <Reveal delay={350}>
        <h1 className="display text-[clamp(4.5rem,15vw,12rem)]">Skills</h1>
      </Reveal>
      <Reveal delay={500} className="mt-4 max-w-2xl">
        <p className="text-xl text-mute md:text-2xl">
          Every skill below is in a superposition of “I know this” and “I'm googling this” until
          you observe it.
        </p>
      </Reveal>

      <div className="mt-16 md:mt-24">
        {SKILL_GROUPS.map((group, i) => (
          <div
            key={group.name}
            className="grid gap-4 border-t border-line py-8 last:border-b md:grid-cols-[1fr_2fr] md:items-baseline-last md:gap-12 md:py-10"
          >
            <Reveal>
              <p className="mb-1 text-base tabular-nums text-mute">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="display text-[clamp(1.875rem,3.5vw,2.75rem)]">{group.name}</h2>
            </Reveal>
            <Reveal delay={100}>
              <ul className="flex flex-wrap text-[clamp(1.2rem,2vw,1.5rem)] leading-snug">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="after:mx-4 after:text-mute after:content-['/'] last:after:content-none"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
