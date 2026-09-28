import { useEffect, useRef, useState } from "react";

export function FloatingPill({
  label,
  href,
  restX,
  restY,
  containerRef,
}: {
  label: string;
  href: string;
  restX: number;
  restY: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const pillRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [phase] = useState(() => Math.random() * Math.PI * 2);
  // Each pill gets a slightly different bob speed so they feel independent
  const [speed] = useState(() => 0.5 + Math.random() * 0.4);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMove = (e: MouseEvent) => {
      const r = container.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };

    const onLeave = () => {
      mouseRef.current = null;
    };

    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseleave", onLeave);

    return () => {
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, [containerRef]);

  useEffect(() => {
    let start: number | null = null;
    let curX = 0,
      curY = 0;
    let velX = 0,
      velY = 0;

    const tick = (t: number) => {
      if (!start) start = t;
      const elapsed = (t - start) / 1000;

      // Idle bob target — slow, dreamy, per-pill random phase & speed
      let targetX = Math.sin(elapsed * speed + phase) * 10;
      let targetY = Math.cos(elapsed * speed * 0.7 + phase) * 8;

      // Soft cursor attraction — pills gently drift toward cursor like
      // leaves being pulled by a slow current; stops within 20px so clickable
      const container = containerRef.current;
      const pill = pillRef.current;

      if (container && pill && mouseRef.current) {
        const cw = container.offsetWidth;
        const ch = container.offsetHeight;
        const pw = pill.offsetWidth;
        const ph = pill.offsetHeight;
        const px = (restX / 100) * cw + curX + pw / 2;
        const py = (restY / 100) * ch + curY + ph / 2;
        const dx = mouseRef.current.x - px;
        const dy = mouseRef.current.y - py;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const ATTRACT_ZONE = 220;

        if (dist < ATTRACT_ZONE && dist > 20) {
          // Gentle pull — linear falloff, max 18px drift
          const strength = ((ATTRACT_ZONE - dist) / ATTRACT_ZONE) * 18;
          targetX += (dx / dist) * strength;
          targetY += (dy / dist) * strength;
        }
      }

      // Spring physics — soft, underdamped for a floaty feel
      const spring = 0.055;
      const damping = 0.88;

      velX = velX * damping + (targetX - curX) * spring;
      velY = velY * damping + (targetY - curY) * spring;
      curX += velX;
      curY += velY;

      setOffset({ x: curX, y: curY });
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [restX, restY, phase, speed, containerRef]);

  return (
    <div
      ref={pillRef}
      style={{
        position: "absolute",
        left: `${restX}%`,
        top: `${restY}%`,
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        willChange: "transform",
      }}
    >
      <a href={href} target="_blank" rel="noreferrer" className="block">
        <div className="bg-surface border-[4px] border-paper rounded-full shadow-pill px-6 py-2 inline-flex items-center justify-start cursor-pointer transition-[filter,transform] duration-150 hover:scale-110 active:scale-95 hover:brightness-110">
          <span
            className="text-coral text-xl sm:text-2xl md:text-3xl leading-snug whitespace-nowrap select-none"
            style={{ fontFamily: "'Matemasie', sans-serif" }}
          >
            {label}
          </span>
        </div>
      </a>
    </div>
  );
}
