"use client";

import { motion } from "framer-motion";
import { 
  LuSearch, 
  LuLayoutTemplate, 
  LuCode, 
  LuShieldCheck, 
  LuRocket, 
  LuRefreshCw 
} from "react-icons/lu";

const steps = [
  {
    step: "01",
    title: "Discovery & Architecture",
    desc: "We analyze your enterprise requirements, define tech stacks, evaluate security posture, and engineer system architectures.",
    icon: LuSearch
  },
  {
    step: "02",
    title: "Interactive Prototyping",
    desc: "Crafting wireframes, atomic design systems, and hyper-realistic Figma click-throughs to validate usability before code.",
    icon: LuLayoutTemplate
  },
  {
    step: "03",
    title: "Agile Sprint Development",
    desc: "Iterative two-week sprints with transparent code reviews, automated CI/CD deployments, and client demo feedback loops.",
    icon: LuCode
  },
  {
    step: "04",
    title: "Rigorous QA & Pen-Testing",
    desc: "Automated unit testing, end-to-end integration tests, load stress testing, and vulnerability pen-testing.",
    icon: LuShieldCheck
  },
  {
    step: "05",
    title: "Production Launch",
    desc: "Seamless cloud cutover, DNS zero-downtime propagation, database indexing, and performance monitoring setup.",
    icon: LuRocket
  },
  {
    step: "06",
    title: "24/7 SLA & Evolution",
    desc: "Continuous feature enhancement, cloud infrastructure optimization, telemetry alerting, and security patches.",
    icon: LuRefreshCw
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase bg-cyan-950/60 border border-cyan-800/40 px-3.5 py-1.5 rounded-full">
            Methodology & Flow
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-4">
            How The Wave Moves: Our Process
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            From inception to enterprise deployment, our engineering workflow guarantees precision, speed, and zero surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300"
              >
                {/* Background Step Number */}
                <span className="absolute -bottom-4 -right-2 text-7xl font-black text-white/[0.03] select-none group-hover:text-cyan-500/[0.08] transition-colors">
                  {item.step}
                </span>

                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xl shadow-lg shadow-cyan-500/20">
                    <Icon />
                  </div>
                  <span className="text-sm font-black text-cyan-400 font-mono">
                    PHASE {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
