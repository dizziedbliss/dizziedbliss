import {
  imgDoodleSmall,
  imgSticker,
  imgPortrait,
  imgPortrait2,
  imgDoodleSwirl,
} from "@/config/assets";
import { PillBtn } from "./PillBtn";

export function HomeSection() {
  return (
    <section
      id="home"
      className="site-section relative pb-16 overflow-hidden"
      style={{ marginTop: 51, marginBottom: 51 }}
    >
      {/* Coral corner — top left */}
      <div className="z-0 absolute top-0 left-0 w-32 h-32 pointer-events-none select-none overflow-hidden">
        <div className="absolute -top-8 -left-8 w-44 h-44 bg-coral rotate-[30deg]" />
      </div>

      {/* Coral corner — bottom left */}
      <div className="z-0 absolute bottom-6 left-0 w-20 h-28 pointer-events-none select-none overflow-hidden">
        <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-coral rotate-[15deg]" />
      </div>

      {/* Inline doodles inside home */}
      <img
        src={imgDoodleSmall}
        alt=""
        aria-hidden
        className="absolute top-4 right-[30%] w-14 opacity-30 pointer-events-none"
        style={{ transform: "rotate(20deg)" }}
      />
      <img
        src={imgSticker}
        alt=""
        aria-hidden
        className="absolute bottom-8 right-[8%] w-16 opacity-25 pointer-events-none"
        style={{ transform: "rotate(-10deg)" }}
      />

      <div className="flex flex-col md:flex-row items-start justify-center gap-10 pt-6 z-1000">
        {/* Text */}
        <div className="flex w-auto flex-col items-start justify-start p-10">
          <div className="flex items-center gap-3 mb-4">
            <svg
              width="36"
              height="36"
              viewBox="0 0 40 40"
              fill="none"
              className="shrink-0 opacity-80"
            >
              <line
                x1="4"
                y1="4"
                x2="36"
                y2="36"
                stroke="#1b1b1b"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <line
                x1="36"
                y1="4"
                x2="4"
                y2="36"
                stroke="#1b1b1b"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900 }}
            >
              <span className="text-ink">I'm </span>
              <span className="text-coral">Max!!</span>
            </h1>
          </div>
          <p
            className="text-ink text-sm sm:text-base leading-snug mb-8 opacity-75 max-w-sm"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            I build intelligent systems, weird interfaces and occasionally overthink quantum
            physics at 2am
          </p>
          <PillBtn href="#profiles">get in touch</PillBtn>
          <img
            src={imgDoodleSmall}
            alt=""
            aria-hidden
            className="mt-8 w-16 md:w-20 opacity-60 pointer-events-none select-none"
          />
        </div>

        {/* Portraits */}
        <div className="relative flex-shrink-0 w-64 h-72 sm:w-80 sm:h-80 md:w-96 md:h-[360px] self-center">
          <div
            className="z-10 absolute left-0 top-6 bg-white p-2 shadow-lg"
            style={{ width: "47%", paddingTop: "60%", transform: "rotate(-4deg)" }}
          >
            <img
              src={imgPortrait2}
              alt="Adithya"
              className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover"
            />
          </div>
          <div
            className="absolute right-0 top-0 bg-white p-2 shadow-xl"
            style={{ width: "50%", paddingTop: "63%", transform: "rotate(2deg)" }}
          >
            <img
              src={imgPortrait}
              alt="Adithya portrait"
              className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover"
            />
          </div>
          <img
            src={imgDoodleSwirl}
            alt=""
            aria-hidden
            className="absolute -bottom-6 -right-4 w-20 opacity-40 pointer-events-none select-none"
            style={{ transform: "rotate(10deg)" }}
          />
        </div>
      </div>
    </section>
  );
}