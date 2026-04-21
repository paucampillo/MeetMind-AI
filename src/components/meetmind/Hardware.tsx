import { motion } from "framer-motion";
import deviceImg from "@/assets/meetmind-device.jpg";

const Hardware = () => {
  return (
    <section id="hardware" className="relative py-32">
      <div className="container grid grid-cols-1 items-center gap-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-neon opacity-20 blur-3xl" />
          <div className="glass relative overflow-hidden rounded-[2rem]">
            <img
              src={deviceImg}
              alt="Dispositivo MeetMind para captura offline de reuniones presenciales"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 glass rounded-full px-3 py-1.5 text-[10px] uppercase tracking-widest">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-neon-cyan animate-pulse align-middle" />
              MeetMind Edge · Offline
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-neon-purple">
            Hardware diferenciador
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Captura Offline.
            <br />
            <span className="text-gradient-neon">Fiabilidad</span> en el mundo real.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            ¿Reunión presencial? Sin problema. Nuestra captura offline garantiza
            que los acuerdos cara a cara tengan la misma trazabilidad que los
            digitales. Cero dependencia del Wi-Fi.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Encriptación de extremo a extremo",
              "Hasta 12 horas de grabación continua",
              "Sincronización automática al reconectar",
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

export default Hardware;
