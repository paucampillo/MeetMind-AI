import { motion } from "framer-motion";
import { type ReactNode } from "react";

const Card = ({
  className = "",
  children,
  delay = 0,
}: {
  className?: string;
  children: ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay }}
    className={`glass neon-border group relative overflow-hidden rounded-3xl p-7 transition duration-500 hover:shadow-glow-cyan ${className}`}
  >
    {children}
  </motion.div>
);

const TaskMockup = () => (
  <div className="relative mt-6 rounded-2xl border border-border/10 bg-surface-elevated/60 p-4">
    <div className="mb-3 flex items-center justify-between">
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
        Reunión · Sync semanal
      </span>
      <div className="flex gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-neon-purple/60" />
      </div>
    </div>
    <div className="space-y-2">
      {[
        { t: "Enviar wireframes a diseño", who: "MA", color: "from-neon-cyan to-sky-400" },
        { t: "Validar presupuesto Q3", who: "JP", color: "from-neon-purple to-fuchsia-400" },
        { t: "Cerrar contrato con Acme", who: "LR", color: "from-emerald-400 to-neon-cyan" },
      ].map((row) => (
        <div
          key={row.t}
          className="flex items-center justify-between rounded-lg border border-border/10 bg-background/40 px-3 py-2 text-xs"
        >
          <div className="flex items-center gap-2">
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-[4px] border border-neon-cyan/50 bg-neon-cyan/10">
              <span className="h-1 w-1 rounded-[1px] bg-neon-cyan" />
            </span>
            <span className="text-foreground/90">{row.t}</span>
          </div>
          <span
            className={`flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br ${row.color} text-[9px] font-bold text-background`}
          >
            {row.who}
          </span>
        </div>
      ))}
    </div>
    <div className="mt-3 flex items-center justify-between text-[10px] text-muted-foreground">
      <span>Resumen IA generado · 2s</span>
      <span className="text-neon-cyan">Sincronizado ✓</span>
    </div>
  </div>
);

const DocIcon = () => (
  <div className="relative mx-auto mt-4 h-32 w-24">
    <div className="absolute inset-0 rounded-xl bg-gradient-neon opacity-20 blur-2xl" />
    <div className="relative flex h-full w-full flex-col gap-1.5 rounded-xl border border-border/20 bg-surface-elevated p-3 shadow-glow-cyan">
      <div className="h-1 w-2/3 rounded bg-neon-cyan/70" />
      <div className="h-1 w-full rounded bg-foreground/30" />
      <div className="h-1 w-5/6 rounded bg-foreground/30" />
      <div className="h-1 w-3/4 rounded bg-foreground/30" />
      <div className="mt-2 h-1 w-1/2 rounded bg-neon-purple/70" />
      <div className="h-1 w-full rounded bg-foreground/20" />
      <div className="h-1 w-2/3 rounded bg-foreground/20" />
    </div>
  </div>
);

const CalendarIcon = () => (
  <div className="relative mx-auto mt-4 h-32 w-32">
    <div className="absolute inset-0 rounded-2xl bg-gradient-neon opacity-20 blur-2xl" />
    <div className="relative flex h-full w-full flex-col rounded-2xl border border-border/20 bg-surface-elevated overflow-hidden shadow-glow-cyan">
      <div className="flex items-center justify-between bg-gradient-neon px-3 py-1.5 text-[9px] font-bold uppercase text-background">
        <span>Mar</span>
        <span>2026</span>
      </div>
      <div className="grid flex-1 grid-cols-5 gap-1 p-2">
        {Array.from({ length: 15 }).map((_, i) => (
          <span
            key={i}
            className={`flex aspect-square items-center justify-center rounded-[3px] text-[8px] ${
              i === 7
                ? "bg-neon-cyan text-background font-bold shadow-glow-cyan"
                : i === 11
                ? "bg-neon-purple/40 text-foreground"
                : "text-muted-foreground"
            }`}
          >
            {i + 1}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const BentoGrid = () => {
  return (
    <section id="features" className="relative py-32">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-neon-cyan">
            Para cada departamento
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Una infraestructura.{" "}
            <span className="text-gradient-neon">Infinitos casos de uso.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-2">
          {/* Large card */}
          <Card className="md:col-span-2 md:row-span-2" delay={0}>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neon-cyan">
              <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan" />
              IT / Tech
            </div>
            <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Solución Integral
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Para el 60% técnico: Tareas, responsables y resúmenes generados al
              instante. Integraciones nativas con tu stack.
            </p>
            <TaskMockup />
          </Card>

          {/* Marketing */}
          <Card delay={0.1}>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neon-purple">
              <span className="h-1.5 w-1.5 rounded-full bg-neon-purple" />
              Marketing
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
              Síntesis y Difusión
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Resúmenes de IA para equipos que necesitan velocidad.
            </p>
            <DocIcon />
          </Card>

          {/* Finance */}
          <Card delay={0.2}>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neon-cyan">
              <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan" />
              Finanzas
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
              Cero Errores
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Centralización y recordatorios automáticos.
            </p>
            <CalendarIcon />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
