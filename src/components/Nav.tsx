import { useEffect, useState } from "react";
import { Link, useRouter } from "@/router";
import { useTheme } from "@/useTheme";
import { StickerCat } from "./StickerCat";

const LINKS: { label: string; to: string; section?: string }[] = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/", section: "projects" },
  { label: "Skills", to: "/skills" },
  { label: "About", to: "/", section: "about" },
  { label: "Contact", to: "/contact" },
];

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} theme`}
      className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-line transition-transform duration-300 hover:rotate-45"
    >
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        {theme === "dark" ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </>
        ) : (
          <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" />
        )}
      </svg>
    </button>
  );
}

export function Nav() {
  const { path } = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const current = (to: string) => (to !== "/" && path === to ? "page" : undefined);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 border-b border-line bg-canvas/85 backdrop-blur-md">
        <nav className="wrap flex h-20 items-center justify-between md:h-24">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="display flex items-center gap-3 text-3xl md:text-4xl"
          >
            Max!!
            <StickerCat className="h-12 w-auto md:h-[4.25rem]" />
          </Link>

          <div className="flex items-center gap-4 md:gap-9">
            <ul className="hidden items-center gap-9 text-lg md:flex">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    section={l.section}
                    className="navlink"
                    aria-current={current(l.to)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="navlink cursor-pointer text-lg md:hidden"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        inert={!open}
        className={`fixed inset-0 z-20 bg-canvas pt-28 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] md:hidden ${open ? "translate-y-0" : "-translate-y-full"}`}
      >
        <ul className="wrap">
          {LINKS.map((l) => (
            <li key={l.label} className="border-t border-line last:border-b">
              <Link
                to={l.to}
                section={l.section}
                onClick={() => setOpen(false)}
                className="display block py-5 text-5xl"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
