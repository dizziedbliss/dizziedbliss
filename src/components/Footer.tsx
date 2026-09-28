export function Footer() {
  return (
    <footer
      className="site-section py-8 text-center text-ink opacity-35 text-xs"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      made with care by Max!! · {new Date().getFullYear()}
    </footer>
  );
}
