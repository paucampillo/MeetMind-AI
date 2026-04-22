import { motion } from "framer-motion";
import { Shield, Lock, FileCheck } from "lucide-react";

const items = [
  {
    icon: Shield,
    title: "Encriptación de extremo a extremo",
    text: "Cada conversación se cifra en tránsito y en reposo. Nadie, ni siquiera nosotros, puede leerla.",
  },
  {
    icon: Lock,
    title: "Cero almacenamiento de audio",
    text: "Solo procesamos texto estructurado. El audio original nunca toca nuestros servidores.",
  },
  {
    icon: FileCheck,
    title: "Cumplimiento RGPD",
    text: "Servidores en la UE, contratos DPA y control granular sobre la retención de datos.",
  },
];

const Security = () => {
  return (
    <section id="security" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Privacidad por diseño.{" "}
            <span className="text-gradient-neon">Seguridad Enterprise.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            No espiamos, estructuramos. MeetMind cumple con los estándares más
            estrictos para que el departamento de IT duerma tranquilo.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 flex gap-4 items-start hover:border-neon-cyan/40 transition-colors"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-neon-cyan/10 border border-neon-cyan/30">
                  <Icon className="w-5 h-5 text-neon-cyan" />
                </div>
                <div>
                  <h3 className="font-semibold">{it.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {it.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Security;
