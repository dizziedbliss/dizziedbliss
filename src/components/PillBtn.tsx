import type { ReactNode } from "react";

export function PillBtn({
  children,
  href,
  onClick,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
}) {
  const inner = (
    <div className="bg-surface border-[4px] border-paper rounded-full shadow-pill px-6 py-2 inline-flex items-center justify-start cursor-pointer transition-transform duration-150 hover:scale-110 active:scale-95">
      <span
        className="text-coral text-xl sm:text-2xl md:text-3xl leading-snug whitespace-nowrap select-none"
        style={{ fontFamily: "'Matemasie', sans-serif" }}
      >
        {children}
      </span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        {...(/^https?:\/\//.test(href) ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  }

  if (onClick) {
    return (
      <button
        onClick={onClick}
        type="button"
        className="appearance-none bg-transparent border-none p-0 cursor-pointer"
      >
        {inner}
      </button>
    );
  }

  return <>{inner}</>;
}
