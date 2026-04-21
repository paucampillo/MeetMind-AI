const Footer = () => {
  return (
    <footer className="border-t border-border/10 py-10">
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-gradient-neon shadow-glow-cyan" />
          MeetMind © 2026
        </div>
        <div className="flex items-center gap-8 text-xs text-muted-foreground">
          <a href="#" className="transition hover:text-foreground">Privacidad</a>
          <a href="#" className="transition hover:text-foreground">Términos</a>
          <a href="#" className="transition hover:text-foreground">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
