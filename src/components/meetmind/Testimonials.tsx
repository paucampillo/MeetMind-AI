import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Antes perdíamos el hilo en preventa. Ahora salgo de la llamada y el presupuesto ya está como tarea en mi calendario.",
    name: "Elena Castaño",
    role: "Directora de Ventas",
    initials: "EC",
    hue: "cyan" as const,
  },
  {
    quote:
      "La primera IA que entiende que en IT no queremos literatura, queremos tickets y responsables.",
    name: "Marc Vidal",
    role: "Tech Lead",
    initials: "MV",
    hue: "purple" as const,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-5xl font-semibold tracking-tight"
        >
          Lo que dicen quienes ya{" "}
          <span className="text-gradient-neon">ejecutan</span>.
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 relative hover:border-neon-cyan/40 transition-colors"
            >
              <Quote
                className={`w-8 h-8 ${
                  t.hue === "cyan" ? "text-neon-cyan" : "text-neon-purple"
                } opacity-70`}
              />
              <blockquote className="mt-4 text-lg leading-relaxed text-foreground/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm border ${
                    t.hue === "cyan"
                      ? "bg-neon-cyan/15 border-neon-cyan/40 text-neon-cyan"
                      : "bg-neon-purple/15 border-neon-purple/40 text-neon-purple"
                  }`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
