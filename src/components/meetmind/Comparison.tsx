import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

type Row = {
  label: string;
  meetmind: string;
  teams: string;
  otter: string;
  manual: string;
};

const rows: Row[] = [
  {
    label: "Tareas asignadas automáticamente",
    meetmind: "Sí, con responsables detectados",
    teams: "No, solo texto plano",
    otter: "Transcripción sin acciones",
    manual: "Manual y propenso a olvidos",
  },
  {
    label: "Fechas límite detectadas",
    meetmind: "Extracción automática",
    teams: "No las identifica",
    otter: "No detecta fechas",
    manual: "Depende de quien tome notas",
  },
  {
    label: "Sincronización Jira / Notion",
    meetmind: "Nativa en 1 clic",
    teams: "Aislado en la app",
    otter: "Solo exportar texto",
    manual: "Copiar y pegar",
  },
  {
    label: "Resúmenes accionables",
    meetmind: "Estructurados por bloques",
    teams: "Bloque de texto largo",
    otter: "Resumen genérico",
    manual: "Sesgos de memoria",
  },
  {
    label: "Tiempo perdido tras la llamada",
    meetmind: "0 minutos",
    teams: "Requiere lectura completa",
    otter: "Revisar transcripción",
    manual: "21 minutos en promedio",
  },
];

const HeaderCell = ({
  title,
  subtitle,
  highlighted = false,
}: {
  title: string;
  subtitle: string;
  highlighted?: boolean;
}) => (
  <div
    className={`p-4 md:p-6 rounded-t-2xl ${
      highlighted
        ? "bg-neon-cyan/10 border border-neon-cyan/50"
        : "bg-white/[0.02] border border-white/10"
    }`}
  >
    <div
      className={`text-base md:text-lg font-semibold ${
        highlighted ? "text-gradient-neon" : "text-muted-foreground"
      }`}
    >
      {title}
    </div>
    <div className="text-xs mt-1 text-muted-foreground/80">{subtitle}</div>
  </div>
);

const Cell = ({
  text,
  variant,
}: {
  text: string;
  variant: "good" | "bad" | "meh";
}) => {
  const Icon = variant === "good" ? Check : variant === "bad" ? X : Minus;
  const color =
    variant === "good"
      ? "text-neon-cyan"
      : variant === "bad"
      ? "text-red-400/70"
      : "text-muted-foreground";
  return (
    <div className="flex items-start gap-2 p-4 md:p-5">
      <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${color}`} />
      <span
        className={`text-sm ${
          variant === "good" ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        {text}
      </span>
    </div>
  );
};

const Comparison = () => {
  return (
    <section id="comparison" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            ¿Por qué <span className="text-gradient-neon">MeetMind</span> y no
            otra cosa?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Compara cómo se procesa una reunión típica según la herramienta que
            uses.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12"
        >
          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
            {/* Table Header */}
            <div className="grid grid-cols-5">
              <div className="p-6 border-b border-white/10">
                <span className="text-xs uppercase tracking-widest text-muted-foreground/60">
                  Característica
                </span>
              </div>
              <HeaderCell title="MeetMind" subtitle="Ejecución automatizada" highlighted />
              <HeaderCell title="IA de Teams / Zoom" subtitle="Resumen genérico" />
              <HeaderCell title="Otter.ai" subtitle="Transcripción pura" />
              <HeaderCell title="Notas manuales" subtitle="Memoria + papel" />
            </div>

            {/* Table Rows */}
            {rows.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className={`grid grid-cols-5 ${
                  i !== rows.length - 1 ? "border-b border-white/5" : ""
                }`}
              >
                <div className="p-5 flex items-center border-r border-white/5">
                  <span className="text-sm font-medium text-foreground">
                    {row.label}
                  </span>
                </div>
                <div className="border-r border-white/5 bg-neon-cyan/[0.03]">
                  <Cell text={row.meetmind} variant="good" />
                </div>
                <div className="border-r border-white/5">
                  <Cell text={row.teams} variant="meh" />
                </div>
                <div className="border-r border-white/5">
                  <Cell text={row.otter} variant="meh" />
                </div>
                <div>
                  <Cell text={row.manual} variant="bad" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-6">
            {rows.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"
              >
                <div className="p-4 border-b border-white/10 bg-white/[0.03]">
                  <span className="text-sm font-medium text-foreground">
                    {row.label}
                  </span>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-semibold text-neon-cyan w-20 shrink-0">
                      MeetMind
                    </span>
                    <Cell text={row.meetmind} variant="good" />
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-semibold text-muted-foreground w-20 shrink-0">
                      Teams/Zoom
                    </span>
                    <Cell text={row.teams} variant="meh" />
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-semibold text-muted-foreground w-20 shrink-0">
                      Otter
                    </span>
                    <Cell text={row.otter} variant="meh" />
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-semibold text-muted-foreground w-20 shrink-0">
                      Manual
                    </span>
                    <Cell text={row.manual} variant="bad" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
