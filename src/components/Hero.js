"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import { LuSparkles, LuTerminal, LuWaves, LuShieldCheck } from "react-icons/lu";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiPython, 
  SiFlutter, 
  SiPostgresql, 
  SiDocker, 
  SiKubernetes, 
  SiTailwindcss
} from "react-icons/si";
import { FaAws, FaBrain } from "react-icons/fa";
import WaveCanvas from "./WaveCanvas";

const techOrbit = [
  { icon: SiNextdotjs, name: "Next.js 16", color: "text-white" },
  { icon: SiReact, name: "React 19", color: "text-cyan-400" },
  { icon: SiTypescript, name: "TypeScript", color: "text-blue-400" },
  { icon: SiPython, name: "AI / Python", color: "text-amber-400" },
  { icon: FaBrain, name: "GenAI & LLMs", color: "text-pink-400" },
  { icon: SiFlutter, name: "Flutter Mobile", color: "text-sky-400" },
  { icon: FaAws, name: "AWS Cloud", color: "text-orange-400" },
  { icon: SiDocker, name: "Docker", color: "text-blue-500" },
  { icon: SiKubernetes, name: "Kubernetes", color: "text-indigo-400" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "text-cyan-300" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden">
      {/* Code Dheu Interactive Real-time Wave Canvas Background */}
      <WaveCanvas />

      {/* Atmospheric Glow Mesh with #020413 & #291146 balance */}
      <div className="glow-mesh w-[550px] h-[550px] bg-[#291146]/80 top-1/6 -left-36 animate-pulse" />
      <div className="glow-mesh w-[650px] h-[650px] bg-cyan-600/15 top-1/4 -right-48 animate-pulse" style={{ animationDuration: '7s' }} />
      <div className="glow-mesh w-[450px] h-[450px] bg-purple-600/20 bottom-10 left-1/3" />

      {/* Subtle Matrix/Code Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* Floating Code Dheu Wave Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-cyan-400/30 text-cyan-300 text-xs md:text-sm font-semibold mb-8 shadow-inner shadow-cyan-500/15"
        >
          <LuWaves className="text-cyan-400 text-base animate-pulse" />
          <span>The Next-Gen Digital Wave by Code Dheu</span>
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white max-w-5xl mx-auto leading-[1.08]"
        >
          Riding The <span className="text-gradient">Wave</span> Of Digital Transformation.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
        >
          Inspired by industry titans like <span className="text-white font-semibold">Dream71</span>, 
          <span className="text-cyan-400 font-semibold"> Code Dheu</span> engineers high-impact E-Governance systems, 
          fintech engines, mission-critical mobile platforms, and autonomous AI architectures.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            href="#contact"
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-purple-600 to-[#291146] text-white font-semibold flex items-center gap-3 shadow-xl shadow-purple-600/30 hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300 border border-white/10"
          >
            <span>Initiate Project</span>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200 text-lg" />
          </Link>
          <Link
            href="#works"
            className="px-8 py-4 rounded-full glass hover:bg-white/10 text-slate-200 hover:text-white font-semibold flex items-center gap-2.5 transition-all duration-200 border border-purple-500/30"
          >
            <FiPlay className="text-cyan-400 text-sm" />
            <span>View Case Studies</span>
          </Link>
        </motion.div>

        {/* Live Tech Orbit Floating Animation in Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-6">
            <LuTerminal />
            <span>Technologies Driving The Wave</span>
          </div>

          {/* Animated floating pill clouds */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {techOrbit.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  animate={{
                    y: [0, idx % 2 === 0 ? -6 : 6, 0],
                  }}
                  transition={{
                    duration: 3 + (idx % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.2,
                  }}
                  className="glass-card px-4 py-2.5 rounded-2xl flex items-center gap-2.5 border border-purple-500/25 hover:border-cyan-400/50 hover:scale-105 transition-all cursor-default shadow-lg shadow-purple-950/40"
                >
                  <Icon className={`text-xl ${tech.color}`} />
                  <span className="text-xs sm:text-sm font-bold text-slate-200">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Highlight Stats Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          <div className="glass-card p-5 rounded-2xl flex flex-col items-center border border-white/10">
            <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400">99.8%</span>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">Uptime SLA Guaranteed</p>
          </div>
          <div className="glass-card p-5 rounded-2xl flex flex-col items-center border border-white/10">
            <span className="text-2xl sm:text-3xl font-extrabold text-purple-400">70+</span>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">Enterprise Projects</p>
          </div>
          <div className="glass-card p-5 rounded-2xl flex flex-col items-center border border-white/10">
            <span className="text-2xl sm:text-3xl font-extrabold text-sky-400">100%</span>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">Agile Delivery</p>
          </div>
          <div className="glass-card p-5 rounded-2xl flex flex-col items-center border border-white/10">
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">24/7</span>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">Mission Support</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
