import { motion } from "framer-motion";

const ParticipantTile = ({
  initials,
  name,
  speaking = false,
  hue,
}: {
  initials: string;
  name: string;
  speaking?: boolean;
  hue: "cyan" | "purple" | "emerald" | "amber";
}) => {
  const hueMap = {
    cyan: "from-neon-cyan/40 to-neon-cyan/10 text-neon-cyan",
    purple: "from-neon-purple/40 to-neon-purple/10 text-neon-purple",
    emerald: "from-emerald-400/40 to-emerald-400/10 text-emerald-300",
    amber: "from-amber-400/40 to-amber-400/10 text-amber-300",
  } as const;
  return (
    <div className="relative aspect-video overflow-hidden rounded-xl border border-border/10 bg-surface-elevated/60">
      <div className={`absolute inset-0 bg-gradient-to-br ${hueMap[hue]} opacity-40`} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-background/80 text-sm font-semibold ${hueMap[hue].split(" ").pop()}`}>
          {initials}
        </div>
      </div>
      <div className="absolute bottom-1.5 left-1.5 flex items-center gap-1.5 rounded-md bg-background/70 px-1.5 py-0.5 text-[9px] text-foreground/90 backdrop-blur">
        {speaking && <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan animate-pulse" />}
        {name}
      </div>
    </div>
  );
};

const MeetMockup = () => (
  <div className="relative">
    <div className="absolute -inset-6 rounded-[2rem] bg-gradient-neon opacity-20 blur-3xl" />
    <div className="glass relative overflow-hidden rounded-[1.75rem] p-4">
      {/* App chrome */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan animate-pulse" />
            En vivo · 32:14
          </span>
          <span className="rounded bg-secondary/60 px-1.5 py-0.5">meet.google.com</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-3">
        {/* Video grid */}
        <div className="col-span-8 grid grid-cols-2 gap-2">
          <ParticipantTile initials="MA" name="María A." hue="cyan" speaking />
          <ParticipantTile initials="JP" name="Juan P." hue="purple" />
          <ParticipantTile initials="LR" name="Lucía R." hue="emerald" />
          <ParticipantTile initials="DV" name="David V." hue="amber" />
        </div>

        {/* MeetMind side panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="col-span-4 flex flex-col gap-2 rounded-xl border border-neon-cyan/30 bg-background/70 p-2.5 shadow-glow-cyan"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-4 w-4 items-center justify-center rounded-full bg-gradient-neon">
                <span className="absolute inset-[2px] rounded-full bg-background" />
                <span className="relative h-1 w-1 rounded-full bg-neon-cyan" />
              </span>
              <span className="text-[10px] font-semibold tracking-tight">MeetMind</span>
            </div>
            <span className="text-[8px] uppercase tracking-widest text-neon-cyan">Live</span>
          </div>

          <div className="text-[9px] uppercase tracking-widest text-muted-foreground">
            Tareas detectadas
          </div>

          <div className="space-y-1.5">
            {[
              { t: "Enviar deck a María", who: "JP", d: "Vie 25" },
              { t: "Validar copy landing", who: "LR", d: "Lun 28" },
              { t: "Reunión con cliente Acme", who: "DV", d: "Mié 30" },
            ].map((row, i) => (
              <motion.div
                key={row.t}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.15 }}
                className="rounded-md border border-border/10 bg-surface-elevated/70 p-1.5"
              >
                <div className="flex items-start gap-1.5">
                  <span className="mt-0.5 flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-[3px] border border-neon-cyan/50 bg-neon-cyan/10">
                    <span className="h-0.5 w-0.5 rounded-[1px] bg-neon-cyan" />
                  </span>
                  <span className="text-[9px] leading-tight text-foreground/90">
                    {row.t}
                  </span>
                </div>
                <div className="mt-1 flex items-center justify-between text-[8px] text-muted-foreground">
                  <span className="rounded bg-neon-purple/20 px-1 py-px text-neon-purple">
                    @{row.who}
                  </span>
                  <span>{row.d}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between rounded-md bg-gradient-neon/10 px-1.5 py-1 text-[8px] text-neon-cyan">
            <span>Sincronizando…</span>
            <span>3 nuevas</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {["mic", "cam", "share", "end"].map((b) => (
          <span
            key={b}
            className={`h-6 w-6 rounded-full ${
              b === "end" ? "bg-destructive/80" : "bg-secondary/70"
            }`}
          />
        ))}
      </div>
    </div>
  </div>
);

const Extension = () => {
  return (
    <section id="hardware" className="relative py-32">
      <div className="container grid grid-cols-1 items-center gap-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <MeetMockup />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-neon-purple">
            La extensión invisible
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Extensión Invisible.
            <br />
            <span className="text-gradient-neon">Integración</span> total.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            ¿Google Meet, Microsoft Teams o Zoom? Da igual dónde te reúnas.
            MeetMind actúa como una extensión nativa que se acopla a tus
            plataformas favoritas para capturar y estructurar la conversación.
            Sin descargas pesadas, sin interrumpir tu flujo de trabajo.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["1-Click Install", "Cero Fricción", "Privacidad por defecto"].map((b) => (
              <span
                key={b}
                className="glass rounded-full border-neon-cyan/30 px-4 py-1.5 text-xs font-medium text-neon-cyan"
              >
                {b}
              </span>
            ))}
          </div>

          <ul className="mt-8 space-y-4">
            {[
              "Funciona dentro de Meet, Teams y Zoom",
              "Captura tareas, decisiones y responsables en tiempo real",
              "Sin grabar archivos pesados — sólo lo que importa",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-neon-cyan/40 bg-neon-cyan/10">
                  <svg viewBox="0 0 24 24" className="h-3 w-3 text-neon-cyan" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-foreground/90">{f}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Extension;
