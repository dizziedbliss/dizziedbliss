import { useState } from "react";

export function Footer() {
  // the visitor's own clock: you are the observer
  const [observed] = useState(() =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  );

  return (
    <footer className="wrap flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-line py-10 text-base text-mute">
      <span>Max!! · {new Date().getFullYear()}</span>
      <span>last observed {observed}</span>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="navlink cursor-pointer"
      >
        back to top ↑
      </button>
    </footer>
  );
}
