import { useState } from "react";
import { EMAIL, PROFILES } from "@/data/profiles";
import { Reveal } from "@/components/Reveal";
import { usePageTitle } from "@/usePageTitle";

function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <button type="button" onClick={copy} className="btn">
      {copied ? "Copied ✓" : "Copy email"}
    </button>
  );
}

export function ContactPage() {
  usePageTitle("Contact · Max!!");
  return (
    <section className="wrap pt-36 pb-24 md:pt-44 md:pb-32">
      <Reveal delay={350}>
        <h1 className="display text-[clamp(4.5rem,15vw,12rem)]">Let's yap.</h1>
      </Reveal>
      <Reveal delay={500} className="mt-4">
        <p className="text-xl text-mute md:text-2xl">casual talk is boring</p>
      </Reveal>

      <div className="mt-16 md:mt-24">
        <Reveal delay={500}>
          <p className="mb-4 text-lg text-mute md:text-xl">The fastest way to reach me</p>
        </Reveal>
        <Reveal delay={550}>
          <a
            href={`mailto:${EMAIL}`}
            className="navlink display inline-block break-all text-[clamp(2rem,6vw,5rem)]"
          >
            {EMAIL}
          </a>
        </Reveal>
        <Reveal delay={600} className="mt-8">
          <CopyEmail />
        </Reveal>
      </div>

      <div className="mt-20 md:mt-28">
        <Reveal>
          <p className="mb-6 text-lg text-mute md:text-xl">Or find me elsewhere</p>
        </Reveal>
        <div>
          {PROFILES.map((p) => (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="row flex items-center justify-between gap-6 py-7 md:py-9"
            >
              <span className="display text-[clamp(2rem,5vw,4rem)]">{p.label}</span>
              <span className="flex items-center gap-5 md:gap-8">
                <span className="row-mute hidden text-lg text-mute sm:block md:text-xl">
                  {p.handle}
                </span>
                <span className="row-arrow text-3xl md:text-5xl" aria-hidden>
                  ↗
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
