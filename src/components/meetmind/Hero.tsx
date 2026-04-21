import { motion } from "framer-motion";

const Soundwave = () => {
  // 18 bars that animate as a soundwave then visually morph into a checklist
  const bars = Array.from({ length: 18 });
  return (
    <div className="relative flex h-44 items-center justify-center gap-1.5">
      {bars.map((_, i) => (
        <span
          key={i}
          className="block w-1.5 rounded-full bg-gradient-to-t from-neon-purple to-neon-cyan animate-soundwave"
          style={{
            height: `${30 + ((i * 13) % 70)}%`,
            animationDelay: `${(i % 9) * 0.08}s`,
            boxShadow: "0 0 12px hsl(var(--neon-cyan) / 0.6)",
          }}
        />
      ))}
    </div>
  );
};

const Checklist = () => {
  const items = [
    "Enviar propuesta a Carla — Vie 22",
    "Revisar KPIs Q2 con Finanzas",
    "Agendar demo cliente Acme",
    "Compartir resumen con el equipo",
  ];
  return (
    <div className="glass w-full rounded-2xl p-5 text-left">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Plan de acción · Reunión 14:30
        </span>
        <span className="flex h-2 w-2 rounded-full bg-neon-cyan shadow-glow-cyan" />
      </div>
      <ul className="space-y-3">
        {items.map((it, i) => (
          <motion.li
            key={it}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.12, duration: 0.4 }}
            className="flex items-center gap-3 text-sm"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-md border border-neon-cyan/40 bg-neon-cyan/10">
              <svg viewBox="0 0 24 24" className="h-3 w-3 text-neon-cyan" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-foreground/90">{it}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="top" className="relative pt-40 pb-28">
      <div className="container relative">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan animate-pulse" />
          Infraestructura de IA para reuniones · v2.0
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto max-w-5xl text-center font-display text-[clamp(2.6rem,7.2vw,6.5rem)] font-semibold leading-[0.95] tracking-tight"
        >
          <span className="text-gradient-outline">Cierra la reunión.</span>
          <br />
          <span className="text-gradient-neon">Abre la ejecución.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          MeetMind transforma tus conversaciones en un plan de acción con
          responsables y fechas límite. Deja de perder 21 minutos tras cada llamada.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#cta"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-neon px-8 py-4 text-sm font-semibold text-background shadow-glow-cyan animate-pulse-glow transition hover:scale-[1.03]"
          >
            Prueba MeetMind Gratis
            <svg viewBox="0 0 24 24" className="h-4 w-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#features"
            className="text-sm text-muted-foreground transition hover:text-foreground"
          >
            Ver cómo funciona →
          </a>
        </motion.div>

        {/* Visual: soundwave morphing into checklist */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="relative mx-auto mt-20 grid max-w-5xl grid-cols-1 items-center gap-6 md:grid-cols-2"
        >
          <div className="glass relative overflow-hidden rounded-3xl p-8">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Captura en vivo
              </span>
              <span className="flex items-center gap-1.5 text-xs text-neon-cyan">
                <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan animate-pulse" />
                REC
              </span>
            </div>
            <Soundwave />
            <div className="mt-2 text-center text-xs text-muted-foreground">
              Conversación → señal → estructura
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-1/2 hidden h-px w-12 -translate-y-1/2 bg-gradient-to-r from-neon-cyan to-transparent md:block" />
            <Checklist />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
