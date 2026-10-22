import { useEffect, useState } from "react";
import { Cat } from "./Cat";

export type CurtainPhase = "intro" | "idle" | "enter" | "leave";
export type CurtainKind = "intro" | "alive" | "dead";

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

function useProgress(runId: number, active: boolean, duration: number) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    setValue(0);
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setValue(easeInOut(t));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // restart on every new navigation
  }, [runId, active, duration]);

  return value;
}

export function Curtain({
  phase,
  kind,
  runId,
  duration,
}: {
  phase: CurtainPhase;
  kind: CurtainKind;
  runId: number;
  duration: number;
}) {
  const progress = useProgress(runId, phase === "enter", duration);
  const pct = phase === "leave" ? 100 : Math.round(progress * 100);

  return (
    <div className="curtain" data-phase={phase} aria-hidden={phase === "idle"}>
      <div className="curtain-noise" />
      <div className="relative flex w-[min(78vw,26rem)] flex-col items-center gap-10">
        <Cat mode={kind === "intro" ? "fill" : kind} className="w-full max-w-[20rem]" />
        {kind !== "intro" && (
          <div className="w-full">
            <div className="bar">
              <span style={{ width: `${pct}%` }} />
            </div>
            <div className="mt-3 flex justify-between text-sm tracking-wide text-mute">
              <span>{kind === "dead" ? "loading… the cat is dead" : "loading… the cat is alive"}</span>
              <span className="tabular-nums">{pct}%</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
