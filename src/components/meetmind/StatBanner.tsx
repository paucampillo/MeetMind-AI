const logos = ["NOVA", "ACME", "QUANTUM", "ORBIT", "LINEAR", "VERTEX", "HELIX", "PULSE"];

const StatBanner = () => {
  return (
    <section className="relative border-y border-border/10 bg-surface/40 py-20">
      <div className="container">
        <p className="mx-auto max-w-4xl text-center font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
          El{" "}
          <span className="text-gradient-neon font-semibold">62.7%</span>{" "}
          <span className="text-foreground/90">
            de los profesionales pierden el hilo tras colgar.
          </span>{" "}
          <span className="text-muted-foreground">MeetMind lo recupera por ti.</span>
        </p>
      </div>

      {/* Marquee */}
      <div className="relative mt-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
          {[...logos, ...logos].map((l, i) => (
            <span
              key={i}
              className="text-2xl font-semibold tracking-[0.3em] text-muted-foreground/40 transition hover:text-neon-cyan"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatBanner;
