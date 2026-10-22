import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, seen] as const;
}

/** Text/blocks slide up out of a mask. `delay` is in ms. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, seen] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${seen ? "is-in" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      <div className="reveal-inner">{children}</div>
    </div>
  );
}

/** Images wipe in from the bottom edge. */
export function RevealImage({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, seen] = useInView<HTMLDivElement>();
  // observe the unclipped outer box; IntersectionObserver treats a fully clipped target as not visible
  return (
    <div ref={ref} className={className}>
      <div
        className={`reveal-clip ${seen ? "is-in" : ""}`}
        style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      >
        {children}
      </div>
    </div>
  );
}
