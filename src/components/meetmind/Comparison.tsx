import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

type Row = { label: string; meetmind: string; ai: string; manual: string };

const rows: Row[] = [
  {
    label: "Tareas asignadas automáticamente",
    meetmind: "Sí, con responsables detectados",
    ai: "No, solo texto plano",
    manual: "Manual y propenso a olvidos",
  },
  {
    label: "Fechas límite detectadas",
    meetmind: "Extracción automática",
    ai: "No las identifica",
    manual: "Depende de quien tome notas",
  },
  {
    label: "Sincronización Jira / Notion",
    meetmind: "Nativa en 1 clic",
    ai: "Aislado en la app",
    manual: "Copiar y pegar",
  },
  {
    label: "Resúmenes accionables",
    meetmind: "Estructurados por bloques",
    ai: "Bloque de texto largo",
    manual: "Sesgos de memoria",
  },
  {
    label: "Tiempo perdido tras la llamada",
    meetmind: "0 minutos",
    ai: "Requiere lectura completa",
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
    className={`p-6 rounded-2xl ${
      highlighted
        ? "bg-white/5 border border-neon-cyan/50 shadow-glow-cyan"
        : "bg-white/[0.02] border border-white/10"
    }`}
  >
    <div
      className={`text-lg font-semibold ${
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
    <div
      className={`flex items-start gap-2 p-5 rounded-xl border ${
        variant === "good"
          ? "border-neon-cyan/30 bg-white/[0.04]"
          : "border-white/5 bg-white/[0.015]"
      }`}
    >
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
          {/* Headers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <HeaderCell title="MeetMind" subtitle="Ejecución automatizada" highlighted />
            <HeaderCell title="IA de Teams / Zoom" subtitle="Resumen genérico" />
            <HeaderCell title="Notas manuales" subtitle="Memoria + papel" />
          </div>

          {/* Rows */}
          <div className="mt-6 space-y-4">
            {rows.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="text-xs uppercase tracking-widest text-muted-foreground/70 mb-2 px-1">
                  {row.label}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Cell text={row.meetmind} variant="good" />
                  <Cell text={row.ai} variant="meh" />
                  <Cell text={row.manual} variant="bad" />
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
