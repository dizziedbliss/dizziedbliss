export function Nav() {
  return (
    <nav className="site-section fixed z-1000 flex items-center justify-between -my-6">
      <span
        className="text-coral text-2xl md:text-3xl"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900 }}
      >
        Max!!
      </span>
      <ul
        className="hidden md:flex gap-8 lg:gap-12 text-ink text-sm"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {["Home", "Projects", "Profiles", "About"].map((s) => (
          <li key={s}>
            <a
              href={`#${s.toLowerCase()}`}
              className="opacity-60 hover:opacity-100 hover:text-coral transition-all duration-200"
            >
              {s}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
