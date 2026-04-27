import { motion } from "framer-motion";

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

        {/* Video de YouTube */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div className="glass relative overflow-hidden rounded-3xl p-2">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/ynXvG9EKAw0"
                title="MeetMind Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
