"use client";

import { useEffect, useRef } from "react";

export default function WaveCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Multi-layered cyber waves parameters
    let step = 0;
    const waves = [
      { color: "rgba(34, 211, 238, 0.28)", length: 0.0035, amplitude: 65, speed: 0.016, offset: 0 },
      { color: "rgba(168, 85, 247, 0.25)", length: 0.0028, amplitude: 85, speed: 0.012, offset: 2 },
      { color: "rgba(41, 17, 70, 0.7)", length: 0.002, amplitude: 105, speed: 0.008, offset: 4 },
      { color: "rgba(56, 189, 248, 0.15)", length: 0.0045, amplitude: 50, speed: 0.02, offset: 1 },
    ];

    // Floating digital code nodes
    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.2
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw glowing digital code particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(34, 211, 238, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw animated mathematical waves (Code Dheu waves)
      step += 1;
      const baseHeight = height * 0.65;

      waves.forEach((w) => {
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 10) {
          // Combination of sin & cos wave frequencies for organic fluid digital wave
          const y =
            baseHeight +
            Math.sin(x * w.length + step * w.speed + w.offset) * w.amplitude +
            Math.cos(x * w.length * 0.5 + step * w.speed * 0.8) * (w.amplitude * 0.35);

          if (x === 0) {
            ctx.lineTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fillStyle = w.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-80"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
