"use client";

import { motion } from "framer-motion";
import { 
  LuTarget, 
  LuEye, 
  LuSparkles, 
  LuTrophy, 
  LuUsers2, 
  LuTrendingUp, 
  LuGlobe2,
  LuCircleCheck
} from "react-icons/lu";

const stats = [
  { label: "Years of Engineering Depth", value: "8+" },
  { label: "Successful Deployments", value: "70+" },
  { label: "Global Enterprise Clients", value: "35+" },
  { label: "Senior Tech Specialists", value: "40+" }
];

const pillars = [
  {
    icon: LuTarget,
    title: "Mission",
    desc: "To deliver resilient, enterprise-scale software solutions and digital platforms that empower businesses, streamline public governance, and scale seamlessly across borders."
  },
  {
    icon: LuEye,
    title: "Vision",
    desc: "To become South Asia's foremost digital technology powerhouse, leading the next wave of AI integration, cloud transformation, and high-impact software engineering."
  },
  {
    icon: LuSparkles,
    title: "Core Philosophy",
    desc: "We treat code as a catalyst for societal and business progress — prioritizing reliability, bulletproof cybersecurity, and human-centered design above all else."
  }
];

const achievements = [
  "Inspired by pioneering agencies like Dream71 to champion GovTech & digital governance.",
  "Deep specialization in Fintech compliance, microservices, and high-concurrency systems.",
  "Agile cross-functional squads: Tech Leads, DevOps, UI/UX researchers, and QA engineers.",
  "End-to-end lifecycle stewardship from architectural blueprint to 24/7 proactive monitoring."
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle ambient glows using requested #291146 */}
      <div className="absolute top-1/4 -left-36 w-96 h-96 bg-[#291146]/40 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#291146]/35 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <LuSparkles className="text-cyan-400" />
            <span>Who We Are</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            We Are <span className="text-gradient">Code Dheu</span> — Architects of the Digital Wave.
          </h2>
          <p className="mt-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            Born at the intersection of creative brilliance and deep engineering rigor, Code Dheu is a full-spectrum digital transformation and software development IT agency. Drawing inspiration from industry benchmarks like Dream71, we build solutions that shape the future of enterprise and governance.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 flex flex-col justify-center text-center group hover:border-cyan-500/30 transition-colors"
            >
              <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
                {s.value}
              </div>
              <div className="mt-2 text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2-Column: Pillars & Core Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column Story & Key Points */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                Our Heritage & Ambition
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-5">
                Empowering Nations & Enterprises Through Code
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                In an era where technology accelerates faster than ever, businesses need more than just software developers; they need strategic engineering partners. Code Dheu brings together experienced software architects, system security professionals, and human-computer interaction designers to craft software that performs with zero compromise.
              </p>
              
              <div className="space-y-3.5 mb-8">
                {achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <LuCircleCheck className="text-cyan-400 mt-1 flex-shrink-0 text-lg" />
                    <span className="text-sm text-slate-300 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm border border-cyan-500/30">
                  CD
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Engineering Leadership</h4>
                  <p className="text-xs text-slate-400">Code Dheu Technology Board</p>
                </div>
              </div>
              <a
                href="#contact"
                className="text-xs font-bold px-4 py-2 rounded-full bg-white/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all"
              >
                Meet With Our Architects →
              </a>
            </div>
          </motion.div>

          {/* Right Column: Mission, Vision, Philosophy */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 group flex-1 flex flex-col justify-center"
                >
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      <Icon />
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
