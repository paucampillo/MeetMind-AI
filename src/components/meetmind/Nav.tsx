import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/components/meetmind/ThemeProvider";

const links = [
  { href: "#how", label: "Cómo funciona" },
  { href: "#features", label: "Producto" },
  { href: "#comparison", label: "Comparativa" },
  { href: "#extension", label: "Extensión" },
  { href: "#pricing", label: "Precios" },
  { href: "#faq", label: "FAQ" },
];

const Nav = () => {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

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

        <div className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/20 bg-secondary/60 text-muted-foreground transition hover:border-neon-cyan/50 hover:text-neon-cyan"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <a
            href="#cta"
            className="hidden rounded-full border border-border/20 bg-secondary/60 px-4 py-1.5 text-xs font-medium transition hover:border-neon-cyan/50 hover:text-neon-cyan sm:inline-block"
          >
            Iniciar sesión
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/20 bg-secondary/60 text-muted-foreground transition hover:border-neon-cyan/50 hover:text-neon-cyan lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass mt-2 rounded-2xl p-4 lg:hidden">
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="transition hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="transition hover:text-neon-cyan"
            >
              Iniciar sesión
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
