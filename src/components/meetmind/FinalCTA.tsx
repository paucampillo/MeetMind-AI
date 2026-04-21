import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

const FinalCTA = () => {
  const [email, setEmail] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Introduce un email válido");
      return;
    }
    toast.success("Cuenta activada. Te hemos enviado el acceso.");
    setEmail("");
  };

  return (
    <section id="cta" className="relative py-40">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl"
        >
          Hay dos tipos de profesionales:
          <br />
          <span className="text-muted-foreground">los que toman notas</span> y{" "}
          <span className="text-gradient-neon">los que ejecutan.</span>
          <br />
          <span className="mt-4 inline-block text-2xl font-normal text-muted-foreground md:text-3xl">
            ¿Quién quieres ser mañana?
          </span>
        </motion.h2>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-14 flex w-full max-w-2xl flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@empresa.com"
            className="glass flex-1 rounded-full px-6 py-5 text-base text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-neon-cyan/60"
            required
          />
          <button
            type="submit"
            className="rounded-full bg-gradient-neon px-8 py-5 text-base font-semibold text-background shadow-glow-cyan transition hover:scale-[1.03]"
          >
            Activar mi cuenta
          </button>
        </motion.form>

        <p className="mx-auto mt-4 text-center text-xs text-muted-foreground">
          Sin tarjeta · 14 días gratis · Cancela cuando quieras
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
