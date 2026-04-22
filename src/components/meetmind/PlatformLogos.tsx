import { motion } from "framer-motion";

const Logo = ({ children, label }: { children: React.ReactNode; label: string }) => (
  <div className="group flex shrink-0 items-center gap-3 px-8 py-3">
    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/10 bg-surface-elevated/60 transition group-hover:border-neon-cyan/40 group-hover:shadow-glow-cyan">
      {children}
    </span>
    <span className="text-sm font-semibold tracking-tight text-foreground/70 transition group-hover:text-foreground">
      {label}
    </span>
  </div>
);

const GoogleMeet = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
    <path d="M3 7v10a2 2 0 0 0 2 2h9V5H5a2 2 0 0 0-2 2Z" fill="#00897B" />
    <path d="M14 9.5 19 6v12l-5-3.5v-5Z" fill="#FBBC04" />
    <path d="M19 6v12l3 1.5V4.5L19 6Z" fill="#34A853" />
    <path d="M14 5v4.5L19 6V5a1 1 0 0 0-1-1h-3l-1 1Z" fill="#4285F4" />
    <path d="M14 14.5V19l-1 1h3a1 1 0 0 0 1-1v-1l-3-3.5Z" fill="#EA4335" />
  </svg>
);

const Teams = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
    <rect x="3" y="6" width="11" height="12" rx="1.5" fill="#5059C9" />
    <text x="8.5" y="15" textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Arial">T</text>
    <circle cx="18" cy="9" r="3" fill="#7B83EB" />
    <circle cx="16" cy="15" r="2.5" fill="#7B83EB" />
  </svg>
);

const Zoom = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
    <rect x="2" y="6" width="14" height="12" rx="2" fill="#2D8CFF" />
    <path d="M16 10l5-2.5v9L16 14v-4Z" fill="#2D8CFF" />
  </svg>
);

const Webex = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
    <circle cx="12" cy="12" r="9" fill="#00BCEB" />
    <path d="M7 12c1.5-3 3.5-3 5 0s3.5 3 5 0" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" />
  </svg>
);

const Slack = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
    <rect x="3" y="10" width="8" height="3" rx="1.5" fill="#36C5F0" />
    <rect x="11" y="3" width="3" height="8" rx="1.5" fill="#2EB67D" />
    <rect x="13" y="11" width="8" height="3" rx="1.5" fill="#ECB22E" />
    <rect x="10" y="13" width="3" height="8" rx="1.5" fill="#E01E5A" />
  </svg>
);

const Discord = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#5865F2">
    <path d="M19.5 5.5A16 16 0 0 0 15.5 4l-.2.4a14 14 0 0 0-6.6 0L8.5 4A16 16 0 0 0 4.5 5.5C2 9 1.4 12.5 1.7 15.9A16 16 0 0 0 6.5 18l.7-1.2a10 10 0 0 1-1.7-.9l.4-.3a11 11 0 0 0 10.2 0l.4.3c-.5.4-1.1.7-1.7.9L15.5 18a16 16 0 0 0 4.8-2.1c.3-3.9-.4-7.4-.8-10.4ZM9 13.5c-.9 0-1.6-.9-1.6-1.9S8.1 9.7 9 9.7s1.6.9 1.6 1.9-.7 1.9-1.6 1.9Zm6 0c-.9 0-1.6-.9-1.6-1.9s.7-1.9 1.6-1.9 1.6.9 1.6 1.9-.7 1.9-1.6 1.9Z" />
  </svg>
);

const platforms = [
  { label: "Google Meet", icon: <GoogleMeet /> },
  { label: "Microsoft Teams", icon: <Teams /> },
  { label: "Zoom", icon: <Zoom /> },
  { label: "Webex", icon: <Webex /> },
  { label: "Slack Huddles", icon: <Slack /> },
  { label: "Discord", icon: <Discord /> },
];

const PlatformLogos = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className="container mt-20"
    >
      <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Compatible con tus plataformas favoritas
      </p>

      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee gap-4">
          {[...platforms, ...platforms].map((p, i) => (
            <Logo key={i} label={p.label}>
              {p.icon}
            </Logo>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PlatformLogos;
