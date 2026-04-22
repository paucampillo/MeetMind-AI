import { motion } from "framer-motion";
import { Plug, Mic, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Plug,
    title: "Instala",
    text: "Añade MeetMind a tu navegador en 10 segundos. Sin configuraciones complejas.",
  },
  {
    icon: Mic,
    title: "Reúnete",
    text: "Habla con normalidad en Meet, Teams o Zoom. La IA trabaja en segundo plano.",
  },
  {
    icon: CheckCircle2,
    title: "Ejecuta",
    text: "Al colgar, tus tareas ya están en tu calendario o gestor de proyectos con responsables asignados.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-5xl font-semibold tracking-tight"
        >
          De la palabra a la acción en{" "}
          <span className="text-gradient-neon">3 pasos</span>.
        </motion.h2>

        <div className="relative mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* connecting line */}
          <div
            className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsl(var(--neon-cyan) / 0.5), hsl(var(--neon-purple) / 0.5), transparent)",
            }}
          />

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative glass rounded-2xl p-8 text-center hover:border-neon-cyan/40 transition-colors"
              >
                <div className="relative mx-auto w-20 h-20 rounded-full flex items-center justify-center bg-background border border-white/10 shadow-glow-cyan">
                  <Icon className="w-8 h-8 text-neon-cyan" />
                  <span className="absolute -top-2 -right-2 text-xs font-mono px-2 py-0.5 rounded-full bg-neon-purple/20 border border-neon-purple/40 text-neon-purple">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {s.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
