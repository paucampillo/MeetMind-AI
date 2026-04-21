import { motion } from "framer-motion";

type Plan = {
  name: string;
  price: string;
  cadence?: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Personal",
    price: "$9",
    cadence: "/mes",
    description: "Para freelancers y estudiantes que quieren ejecutar más rápido.",
    features: [
      "Extensión nativa para Meet, Teams y Zoom",
      "Transcripción inteligente en tiempo real",
      "Extracción de tareas personales",
      "Hasta 20 reuniones al mes",
    ],
    cta: "Empezar gratis",
  },
  {
    name: "Team",
    price: "$19",
    cadence: "/mes/usuario",
    description: "Para equipos que viven en reuniones y necesitan trazabilidad.",
    features: [
      "Todo lo del Plan Personal",
      "Asignación automática de responsables",
      "Gestor de tareas colaborativo",
      "Sistema inteligente de notificaciones",
      "Integraciones con Slack, Notion y Jira",
    ],
    cta: "Probar 14 días gratis",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Contactar",
    description: "Para C-Level y organizaciones con requisitos avanzados.",
    features: [
      "Todo lo del Plan Team",
      "Dashboards directivos en tiempo real",
      "Diagramas de Gantt automáticos",
      "Seguridad avanzada y SSO",
      "Soporte dedicado y SLA",
    ],
    cta: "Hablar con ventas",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-32">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-neon-cyan">
            Precios
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Elige cómo quieres{" "}
            <span className="text-gradient-neon">ejecutar.</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Sin tarjeta para empezar. Cambia o cancela cuando quieras.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-3xl p-8 ${
                plan.highlighted
                  ? "glass neon-border bg-surface-elevated/60 shadow-glow-cyan md:-translate-y-4"
                  : "glass"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-neon px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-background shadow-glow-cyan">
                  Más popular
                </span>
              )}

              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    plan.highlighted ? "bg-neon-cyan" : "bg-neon-purple"
                  }`}
                />
                Plan {plan.name}
              </div>

              <div className="mt-5 flex items-baseline gap-1">
                <span
                  className={`font-display text-5xl font-semibold tracking-tight ${
                    plan.highlighted ? "text-gradient-neon" : "text-foreground"
                  }`}
                >
                  {plan.price}
                </span>
                {plan.cadence && (
                  <span className="text-sm text-muted-foreground">
                    {plan.cadence}
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-neon-cyan/40 bg-neon-cyan/10">
                      <svg viewBox="0 0 24 24" className="h-3 w-3 text-neon-cyan" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-gradient-neon text-background shadow-glow-cyan hover:scale-[1.02]"
                    : "border border-border/20 bg-secondary/60 text-foreground hover:border-neon-cyan/50 hover:text-neon-cyan"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
