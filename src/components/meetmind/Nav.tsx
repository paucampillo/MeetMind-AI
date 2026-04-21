const Nav = () => {
  return (
    <header className="fixed left-1/2 top-6 z-50 w-[min(96%,1100px)] -translate-x-1/2">
      <nav className="glass flex items-center justify-between rounded-full px-5 py-3">
        <a href="#top" className="flex items-center gap-2">
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-neon shadow-glow-cyan">
            <span className="absolute inset-[3px] rounded-full bg-background" />
            <span className="relative h-2 w-2 rounded-full bg-neon-cyan" />
          </span>
          <span className="text-sm font-semibold tracking-tight">MeetMind</span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="transition hover:text-foreground">Producto</a>
          <a href="#hardware" className="transition hover:text-foreground">Extensiones</a>
          <a href="#pricing" className="transition hover:text-foreground">Precios</a>
        </div>
        <a
          href="#cta"
          className="rounded-full border border-border/20 bg-secondary/60 px-4 py-1.5 text-xs font-medium transition hover:border-neon-cyan/50 hover:text-neon-cyan"
        >
          Iniciar sesión
        </a>
      </nav>
    </header>
  );
};

export default Nav;
