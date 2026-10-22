import { useEffect, useState } from "react";

/** A small cat parked bottom-right, in thumb reach. Hover or tap it to spill the tea. */
export function SpillTheTea() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // a mouse hovers; touch and keyboard toggle on click
  const mouse = (e: { pointerType: string }) => e.pointerType === "mouse";

  return (
    // the wrapper's box spans the hidden card too, so only the cat and the open card take pointer events
    <div className="pointer-events-none fixed bottom-4 right-4 z-30 flex flex-col items-end gap-3 md:bottom-6 md:right-6">
      <div
        id="tea-fact"
        role="status"
        className={`w-64 border border-line bg-surface p-5 transition-all duration-300 md:w-72 ${open ? "pointer-events-auto translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
        onPointerEnter={(e) => mouse(e) && setOpen(true)}
        onPointerLeave={(e) => mouse(e) && setOpen(false)}
      >
        <p className="display text-3xl">Spilled the tea</p>
        <p className="mt-2 text-base leading-relaxed text-mute">
          Schrödinger never said the cat is both alive and dead. He said that idea is absurd.
          Whether it's alive or dead, nobody knows until someone looks.
        </p>
      </div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="tea-fact"
        aria-label={open ? "Spilled the tea" : "Spill the tea"}
        onPointerEnter={(e) => mouse(e) && setOpen(true)}
        onPointerLeave={(e) => mouse(e) && setOpen(false)}
        onClick={(e) => !mouse(e.nativeEvent as PointerEvent) && setOpen((o) => !o)}
        className="pointer-events-auto cursor-pointer transition-transform duration-300 hover:-rotate-6"
      >
        <img src="/cat-tea.png" alt="" className="gone-cat h-14 w-auto md:h-16" />
      </button>
    </div>
  );
}
