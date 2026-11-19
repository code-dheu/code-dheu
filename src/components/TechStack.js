"use client";

import { motion } from "framer-motion";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiPython, 
  SiFlutter, 
  SiPostgresql, 
  SiMongodb, 
  SiDocker, 
  SiKubernetes, 
  SiTailwindcss,
  SiRedis,
  SiGraphql
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const stack = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "React / RN", icon: SiReact, color: "text-cyan-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-emerald-400" },
  { name: "Python / AI", icon: SiPython, color: "text-amber-400" },
  { name: "Flutter", icon: SiFlutter, color: "text-sky-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-indigo-400" },
  { name: "Redis", icon: SiRedis, color: "text-red-400" },
  { name: "AWS Cloud", icon: FaAws, color: "text-orange-400" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-sky-500" },
  { name: "GraphQL", icon: SiGraphql, color: "text-pink-400" },
];

export default function TechStack() {
  return (
    <section className="py-20 bg-slate-950/80 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-12">
        <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
          Battle-Tested Technologies
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2">
          Engineered With Modern Industrial Stacks
        </h2>
      </div>

      {/* Marquee row */}
      <div className="flex gap-8 overflow-hidden relative select-none">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        <div className="flex shrink-0 gap-8 animate-marquee items-center justify-around min-w-full">
          {stack.concat(stack).map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={idx}
                className="glass px-6 py-3.5 rounded-2xl flex items-center gap-3 border border-white/5 hover:border-cyan-500/30 transition-colors"
              >
                <Icon className={`text-2xl ${tech.color}`} />
                <span className="text-sm font-semibold text-slate-200">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
