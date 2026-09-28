import { imgDoodleSwirl, imgDoodleSmall, imgDraw, imgSticker } from "@/config/assets";

export function PageDoodles() {
  return (
    <div className="pointer-events-none select-none" aria-hidden>
      {/* Top-right swirl */}
      <img
        src={imgDoodleSwirl}
        alt=""
        className="fixed top-[6vh] right-[-60px] w-48 md:w-64 opacity-20 z-0"
        style={{ transform: "rotate(-25deg)" }}
      />
      {/* Mid-left draw */}
      <img
        src={imgDraw}
        alt=""
        className="fixed top-[38vh] left-[-20px] w-24 md:w-36 opacity-15 z-0"
        style={{ transform: "rotate(12deg)" }}
      />
      {/* Mid-right small doodle */}
      <img
        src={imgDoodleSmall}
        alt=""
        className="fixed top-[55vh] right-[2vw] w-20 md:w-28 opacity-20 z-0"
        style={{ transform: "rotate(42deg)" }}
      />
      {/* Lower-left swirl */}
      <img
        src={imgDoodleSwirl}
        alt=""
        className="fixed bottom-[22vh] left-[-40px] w-40 md:w-56 opacity-10 z-0"
        style={{ transform: "rotate(70deg) scaleX(-1)" }}
      />
      {/* Lower-right sticker */}
      <img
        src={imgSticker}
        alt=""
        className="fixed bottom-[8vh] right-[4vw] w-20 md:w-28 opacity-20 z-0"
        style={{ transform: "rotate(-15deg)" }}
      />
      {/* Center-top draw */}
      <img
        src={imgDraw}
        alt=""
        className="fixed top-[72vh] left-[40vw] w-16 md:w-24 opacity-10 z-0"
        style={{ transform: "rotate(-30deg)" }}
      />
    </div>
  );
}
