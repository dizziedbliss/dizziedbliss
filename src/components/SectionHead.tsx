export function SectionHead({ accent, sub }: { accent: string; sub: string }) {
  return (
    <div className="mb-10 md:mb-14">
      <p
        className="text-coral text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900 }}
      >
        {accent}
      </p>
      <p
        className="text-ink text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
      >
        {sub}
      </p>
    </div>
  );
}
