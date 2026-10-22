import { CatBox } from "@/components/CatBox";
import { Reveal, RevealImage } from "@/components/Reveal";
import { Link } from "@/router";
import { usePageTitle } from "@/usePageTitle";

export function NotFoundPage() {
  usePageTitle("404 · The page is not alive · Max!!");

  return (
    <section className="wrap pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Reveal delay={350}>
            <h1 className="display text-[clamp(3.25rem,6.5vw,5.75rem)]">
              <span className="block">The cat is alive.</span>
              <span className="block text-mute">The page is not.</span>
            </h1>
          </Reveal>
          <Reveal delay={500} className="mt-6 max-w-lg">
            <p className="text-xl text-mute md:text-2xl">
              It climbed out of the box and took the link with it. Nobody observed this page, so
              it collapsed into a 404.
            </p>
          </Reveal>
          <Reveal delay={600} className="mt-10">
            <Link to="/" className="btn btn-solid">
              Back to the lab <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
        <RevealImage delay={400} className="mx-auto w-full max-w-md">
          <CatBox meow className="aspect-square w-full" />
        </RevealImage>
      </div>
    </section>
  );
}
