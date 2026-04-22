import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Funciona en reuniones híbridas?",
    a: "Sí, detecta las voces principales de la sala y de los remotos, atribuyendo cada tarea al hablante correcto sin importar dónde esté.",
  },
  {
    q: "¿Puedo editar las tareas?",
    a: "Absolutamente. Tienes control total antes de sincronizarlas con tu equipo: edita, reasigna o elimina cualquier elemento extraído por la IA.",
  },
  {
    q: "¿Con qué herramientas se integra?",
    a: "Conectamos de forma nativa con Notion, Jira, Asana, Trello, Google Calendar y Outlook. Más integraciones en camino cada mes.",
  },
  {
    q: "¿Necesito instalar algo en el escritorio?",
    a: "No. MeetMind vive en tu navegador como una extensión ligera. Sin instaladores ni permisos de administrador.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-5xl font-semibold tracking-tight"
        >
          Preguntas <span className="text-gradient-neon">frecuentes</span>.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 glass rounded-2xl p-2 md:p-4"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-white/10 px-4"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline hover:text-neon-cyan transition-colors">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
