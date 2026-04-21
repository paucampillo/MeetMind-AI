import { useEffect, useRef } from "react";

/**
 * Neuro-Execution Scroll Animation
 * Chaotic scattered dots smoothly transition into a perfectly structured grid
 * as the user scrolls down the page. Lines connect between near nodes, drawing
 * the visual narrative from "chaos" to "actionable order".
 */
const NeuroNodes = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const progressRef = useRef(0);
  const targetProgressRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };
    resize();

    // Build a grid of nodes; each one has a chaotic origin and an ordered target
    const cols = Math.max(8, Math.floor(width / 110));
    const rows = Math.max(6, Math.floor(height / 110));
    const cellW = width / cols;
    const cellH = height / rows;

    type Node = {
      cx: number; cy: number;          // chaotic
      ox: number; oy: number;          // ordered (grid)
      phase: number;                   // for subtle movement
    };

    const nodes: Node[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const ox = c * cellW + cellW / 2;
        const oy = r * cellH + cellH / 2;
        nodes.push({
          cx: ox + (Math.random() - 0.5) * cellW * 3.2,
          cy: oy + (Math.random() - 0.5) * cellH * 3.2,
          ox,
          oy,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      targetProgressRef.current = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);
    onScroll();

    let raf = 0;
    const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

    const render = (time: number) => {
      // Smoothly chase the scroll target
      progressRef.current += (targetProgressRef.current - progressRef.current) * 0.06;
      const p = easeInOut(Math.min(1, progressRef.current * 1.15));

      ctx.clearRect(0, 0, width, height);

      // Compute current positions
      const positions = nodes.map((n) => {
        const drift = (1 - p) * 6;
        const x = n.cx + (n.ox - n.cx) * p + Math.sin(time * 0.0006 + n.phase) * drift;
        const y = n.cy + (n.oy - n.cy) * p + Math.cos(time * 0.0006 + n.phase) * drift;
        return { x, y };
      });

      // Draw connection lines (only when ordering progresses)
      const linkAlpha = Math.max(0, p - 0.15);
      if (linkAlpha > 0) {
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const i = r * cols + c;
            const a = positions[i];

            // Right neighbor
            if (c < cols - 1) {
              const b = positions[i + 1];
              drawLink(ctx, a, b, linkAlpha, "cyan");
            }
            // Bottom neighbor
            if (r < rows - 1) {
              const b = positions[i + cols];
              drawLink(ctx, a, b, linkAlpha, "purple");
            }
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < positions.length; i++) {
        const { x, y } = positions[i];
        const radius = 1.2 + p * 1.4;
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 14);
        const cyanA = 0.15 + p * 0.5;
        glow.addColorStop(0, `hsla(187, 100%, 60%, ${cyanA})`);
        glow.addColorStop(1, "hsla(187, 100%, 60%, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, 14, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `hsla(187, 100%, 75%, ${0.4 + p * 0.6})`;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(render);
    };

    const drawLink = (
      c: CanvasRenderingContext2D,
      a: { x: number; y: number },
      b: { x: number; y: number },
      alpha: number,
      tone: "cyan" | "purple"
    ) => {
      const grad = c.createLinearGradient(a.x, a.y, b.x, b.y);
      if (tone === "cyan") {
        grad.addColorStop(0, `hsla(187, 100%, 60%, ${alpha * 0.55})`);
        grad.addColorStop(1, `hsla(291, 100%, 65%, ${alpha * 0.25})`);
      } else {
        grad.addColorStop(0, `hsla(291, 100%, 65%, ${alpha * 0.35})`);
        grad.addColorStop(1, `hsla(187, 100%, 60%, ${alpha * 0.55})`);
      }
      c.strokeStyle = grad;
      c.lineWidth = 0.6;
      c.beginPath();
      c.moveTo(a.x, a.y);
      c.lineTo(b.x, b.y);
      c.stroke();
    };

    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-screen w-screen opacity-70"
    />
  );
};

export default NeuroNodes;
